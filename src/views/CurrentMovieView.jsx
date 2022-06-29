import { useParams, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FetchApi } from "../services/FetchAPI";
import { BackButton } from "../Components/Button/Button";
import { Loader } from "../Components/Loader/Loader";
const fetchFilms = new FetchApi();
const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";

const Cast = lazy(() => import("./Cast.jsx" /* webpackChunkName: cast*/));
const Review = lazy(() => import("./Review.jsx" /* webpackChunkName: review*/));

export default function CurrentMovieView() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetchFilms.fetchMoviesById(params.id).then((response) => {
      setMovie(response.data);
    });
  }, [params.id]);
  const location = useLocation();

  if (movie) {
    return (
      <>
        <div className="container">
          <Link to={location.state}>
            <BackButton />
          </Link>
          <div className="currentFilmBlock">
            <div className="posterBlock">
              <img
                src={BASE_POSTER_URL + movie.poster_path}
                alt={movie.original_title}
                className="poster"
              />
            </div>
            <div className="infoBlock">
              <h1>
                {movie.original_title + `(${movie.release_date.substr(0, 4)})`}
              </h1>
              <p>User score: {Math.round(movie.vote_average * 10) + "%"}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>

              <h3>Genres</h3>
              <p>{movie.genres.map(({ name }) => `${name}, `)}</p>
            </div>
          </div>
          <hr />
          <div className="additionalInfo">
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast" state={location.state} className="addInfo">
                  Cast
                </Link>
              </li>
              <li>
                <Link to="review" state={location.state} className="addInfo">
                  Review
                </Link>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<Cast id={params.id} />}></Route>
            <Route path="review" element={<Review id={params.id} />}></Route>
          </Routes>
        </Suspense>
      </>
    );
  }
}
