import { Link } from "react-router-dom";

function RenderFilms({ films }) {
  return (
    <ul>
      {films.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{original_title}</Link>
        </li>
      ))}
    </ul>
  );
}
export { RenderFilms };
