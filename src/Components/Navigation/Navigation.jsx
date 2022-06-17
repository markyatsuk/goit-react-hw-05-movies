import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export { Navigation };
