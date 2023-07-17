import css from './Movies.module.css';
import { SearchBar } from 'components/searchBar/SearchBar';
import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'Api/FetchMovies';

export default function Movies() {
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchInputValue = searchParams.get('inputValue') ?? '';

    fetchMovies(
      `https://api.themoviedb.org/3/search/movie?query=${searchInputValue}&include_adult=false&language=en-US&page=1`
    )
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
              <li key={result.id}>
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
