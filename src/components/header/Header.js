import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
