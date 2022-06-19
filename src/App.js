import { Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { Navigation } from "./Components/Navigation/Navigation.jsx";

const HomeView = lazy(() =>
  import("./Components/views/HomeView.jsx" /* webpackChunkName: home-view*/)
);
const MoviesView = lazy(() =>
  import("./Components/views/MoviesView.jsx" /* webpackChunkName: movies-view*/)
);
const CurrentMovieView = lazy(() =>
  import(
    "./Components/views/CurrentMovieView.jsx" /* webpackChunkName: cuurent-movie-view*/
  )
);
const PageNotFoud = lazy(() =>
  import(
    "./Components/views/PageNotFound.jsx" /* webpackChunkName: page-not-found-view*/
  )
);

function App() {
  const [finalFilms, setFinalFilms] = useState(null);
  function setFilms(films) {
    setFinalFilms(films);
  }
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path="/"
            element={<HomeView setFinalFilms={setFilms} />}
          ></Route>
          <Route path="/movies" element={<MoviesView />}></Route>
          <Route
            path="/movies/:id/*"
            element={<CurrentMovieView finalFilms={finalFilms} />}
          ></Route>
          <Route path="*" element={<PageNotFoud />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
