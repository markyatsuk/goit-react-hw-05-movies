import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { FetchApi } from "../FetchAPI/FetchAPI";
import { RenderFilmsByName } from "../RenderFilms/RenderFilms";
const fetchFilms = new FetchApi();

export default function MoviesView({ handleSearchValue }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [filmsFound, setFilmsFound] = useState(null);
  const [status, setStatus] = useState("idle");
  function handleChange(e) {
    setValue(e.currentTarget.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchValue(value);
    fetchFilms.query = value;
    fetchFilms.fetchMoviesByName().then(({ data }) => {
      if (data.results.length > 0) {
        setFilmsFound(data.results);
        setStatus("resolved");

        navigate(`?query=${value}`);
      }
      console.log(data.results);
    });
    console.log(location);
  }

  useEffect(() => {
    if (location.search && !filmsFound) {
      const previousSearch = location.search.slice(7);
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
