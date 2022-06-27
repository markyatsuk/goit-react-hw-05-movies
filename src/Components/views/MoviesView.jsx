import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { FetchApi } from "../FetchAPI/FetchAPI";
import { RenderFilmsByName } from "../RenderFilms/RenderFilms";
import Notiflix from "notiflix";
const fetchFilms = new FetchApi();

export default function MoviesView({ handleSearchValue }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [filmsFound, setFilmsFound] = useState(null);
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setValue(e.currentTarget.value.toLowerCase().trim());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) {
      Notiflix.Notify.warning("Enter a correct requeest");
      return;
    }

    handleSearchValue(value);

    fetchFilms.query = value.trim();
    fetchFilms.fetchMoviesByName().then(({ data }) => {
      if (data.results.length > 0) {
        setFilmsFound(data.results);
        setStatus("resolved");
        navigate(`?query=${value}`);
      }
    });
  }

  useEffect(() => {
    if (location.search && !filmsFound) {
      const previousSearch = new URLSearchParams(location.search).get("query");
      setValue(previousSearch);
      fetchFilms.query = previousSearch;
      fetchFilms.fetchMoviesByName().then(({ data }) => {
        if (data.results.length > 0) {
          setFilmsFound(data.results);
          setStatus("resolved");
        }
      });
    }
  }, [location.search, filmsFound]);

  return (
    <>
      <form className="SearchForm" id="search-form" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <ImSearch />
        </button>

        <input
          className="search-form__input"
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
      {status === "resolved" && (
        <RenderFilmsByName films={filmsFound} query={value} />
      )}
    </>
  );
}
