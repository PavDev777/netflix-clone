import cls from "classnames";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import netflixLogo from "../../assets/Netflix-Brand-Logo.png";

import s from "./header.module.scss";

export const Header = () => {
  const isActive = ({ isActive }: { isActive: boolean }) => {
    const classes = cls([s.navLink], {
      [s.active]: isActive,
    });
    return classes;
  };

  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <section className={s.imgSection}>
          <Link to="/browse">
            <img className={s.img} src={netflixLogo} alt="logo" />
          </Link>
        </section>
        <section>
          <ul className={s.navLinks}>
            <li>
              <NavLink className={isActive} to="/browse">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="/browse/genre">
                TV Shows
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="/browse/genre/movies">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="/latest">
                New & Popular
              </NavLink>
            </li>
          </ul>
        </section>
        <section>
          <AiOutlineSearch />
          user info
        </section>
      </nav>
    </header>
  );
};
