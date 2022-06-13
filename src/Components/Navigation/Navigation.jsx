import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
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
  );
}

export { Navigation };
