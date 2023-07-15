// import css from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'Api/FetchMovies';

export function Reviews() {
  const { movieId } = useParams();
  const [Reviews, setReviews] = useState('');

  useEffect(() => {
    fetchMovies(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`
    )
      .then(results => {
        setReviews(results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return Reviews.total_results ? (
    <ul>
      {Reviews.results.map(result => {
        return (
          <li key={result.id}>
            <h3>{result.author}</h3>
            <p>{result.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
}
