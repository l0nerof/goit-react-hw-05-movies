import { Suspense, useState, useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovies } from 'Api/FetchMovies';
import css from './MovieDetails.module.css';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  useEffect(() => {
    fetchMovies(url)
      .then(results => {
        setMovie(results);
      })
      .catch(error => console.log(error));
  }, [url]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    movie && (
      <div className={css.MovieDetailsContainer}>
        <Link to={backLinkHref} className={css.MovieDetailsLink}>
          Go back
        </Link>
        <div>
          <img
            width="200px"
            height="300px"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User Scrore: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <div>
              {movie.genres.map(genr => {
                return <p key={genr.id}>{genr.name}</p>;
              })}
            </div>
          </div>
        </div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <NavLink to="cast" className={css.MovieDetailsNavLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={css.MovieDetailsNavLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
}
