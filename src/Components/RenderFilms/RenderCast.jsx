import s from "./RenderFilms.module.css";
import imgNotFound from "../../images/notfound.svg.png";
const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";
function RenderCast({ cast }) {
  return (
    <ul className={s.castList}>
      {cast.map(({ profile_path, name, character, id }) => (
        <li key={id} className={s.castItem}>
          <div className={s.castPhoto}>
            {profile_path ? (
              <img
                src={BASE_POSTER_URL + profile_path}
                alt={name}
                className={s.castImg}
              />
            ) : (
              <img src={imgNotFound} alt={name} className={s.castImg} />
            )}
          </div>
          <div className={s.castInfo}>
            <h4 className={s.name}>{name}</h4>
            <p className={s.character}>{character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export { RenderCast };
