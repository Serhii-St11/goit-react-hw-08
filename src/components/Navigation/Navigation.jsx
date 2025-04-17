import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
