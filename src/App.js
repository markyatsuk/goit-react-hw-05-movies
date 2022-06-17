import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Navigation } from "./Components/Navigation/Navigation.jsx";
import { HomeView } from "./Components/views/HomeView.jsx";
import { MoviesView } from "./Components/views/MoviesView.jsx";
import { CurrentMovieView } from "./Components/views/CurrentMovieView.jsx";
import { PageNotFoud } from "./Components/views/PageNotFound.jsx";
function App() {
  const [finalFilms, setFinalFilms] = useState(null);
  function setFilms(films) {
    setFinalFilms(films);
  }
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView setFinalFilms={setFilms} />}></Route>
        <Route path="/movies" element={<MoviesView />}></Route>
        <Route
          path="/movies/:id"
          element={<CurrentMovieView finalFilms={finalFilms} />}
        ></Route>
        <Route path="*" element={<PageNotFoud />}></Route>
      </Routes>
    </div>
  );
}

export default App;
