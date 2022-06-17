import { Link } from "react-router-dom";
import s from "./RenderFilms.module.css";
function RenderFilms({ films }) {
  return (
    <ul>
      {films.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`movies/${id}`} className={s.film}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function RenderFilmsByName({ films }) {
  return (
    <ul>
      {films.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`${id}`} className={s.film}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { RenderFilms, RenderFilmsByName };
