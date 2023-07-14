import css from './Movies.module.css';
import { SearchBar } from 'components/searchBar/SearchBar';
import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'Api/FetchMovies';

export function Movies() {
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
    fetchMovies(url)
      .then(results => {
        setMovies(results);
      })
      .catch(error => console.log(error));
  }, [searchParams]);

  return (
    <div>
      <SearchBar onSearchParams={setSearchParams} />
      {movies && (
        <ul>
          {movies.results.map(result => {
            return (
              <li key={result.id} className={css.MovieItem}>
                <NavLink to={`${result.id}`} className={css.MovieLink}>
                  <p>{result.original_title}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
