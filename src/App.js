import { Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { Navigation } from "./Components/Navigation/Navigation.jsx";
import { Loader } from "./Components/Loader/Loader.jsx";

const HomeView = lazy(() =>
  import("./views/HomeView.jsx" /* webpackChunkName: home-view*/)
);
const MoviesView = lazy(() =>
  import("./views/MoviesView.jsx" /* webpackChunkName: movies-view*/)
);
const CurrentMovieView = lazy(() =>
  import(
    "./views/CurrentMovieView.jsx" /* webpackChunkName: cuurent-movie-view*/
  )
);
const PageNotFoud = lazy(() =>
  import("./views/PageNotFound.jsx" /* webpackChunkName: page-not-found-view*/)
);

function App() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearchValue(value) {
    setSearchValue(value);
  }
  function checkValue() {
    return searchValue;
  }

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={<HomeView searchValue={searchValue} />}
          ></Route>
          <Route
            path="/movies"
            element={
              <MoviesView
                handleSearchValue={handleSearchValue}
                checkValue={checkValue}
              />
            }
          ></Route>
          <Route path="/movies/:id/*" element={<CurrentMovieView />}></Route>
          <Route path="*" element={<PageNotFoud />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
