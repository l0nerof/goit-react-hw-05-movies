import css from './Home.module.css';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/FetchMovies';
import { HomeTrending } from 'components/homeTrending/HomeTrending';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    )
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={css.Home}>
      <h1 className={css.HomeTitle}>Trending today</h1>
      <HomeTrending movies={movies} />
    </div>
  );
}
