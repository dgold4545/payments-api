import clsx from "clsx";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

const addActiveClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <nav>
      <ul className={css.flex}>
        <li>
          <NavLink to="/" className={addActiveClass}>
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={addActiveClass}>
            About page
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={addActiveClass}>
            Products Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={addActiveClass}>
            Login Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/payments" className={addActiveClass}>
            Payment Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
