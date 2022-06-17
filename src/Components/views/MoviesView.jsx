import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { FetchApi } from "../FetchAPI/FetchAPI";
import { RenderFilmsByName } from "../RenderFilms/RenderFilms";
const fetchFilms = new FetchApi();

function MoviesView() {
  const [value, setValue] = useState("");
  const [filmsFound, setFilmsFound] = useState(null);
  const [status, setStatus] = useState("idle");
  function handleChange(e) {
    setValue(e.currentTarget.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchFilms.query = value;
    fetchFilms.fetchMoviesByName().then(({ data }) => {
      if (data.results.length > 0) {
        setFilmsFound(data.results);
        setStatus("resolved");
      }
      console.log(data.results);
    });
  }
  if (status === "resolved") {
    return <RenderFilmsByName films={filmsFound} />;
  }
  return (
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
  );
}
export { MoviesView };
