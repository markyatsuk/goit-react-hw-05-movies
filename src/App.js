import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation.jsx";
import { HomeView } from "./Components/views/HomeView.jsx";
import { MoviesView } from "./Components/views/MoviesView.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies" element={<MoviesView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
