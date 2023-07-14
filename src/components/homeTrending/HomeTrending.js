import { NavLink } from 'react-router-dom';
import css from './HomeTrending.module.css';

export function HomeTrending({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to={`movies/${movie.id}`} className={css.HomeTrendingItem}>
              <p>{movie.title}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
