import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'Api/FetchMovies';

export function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState('');

  useEffect(() => {
    fetchMovies(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
    )
      .then(results => {
        setCredits(results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    credits && (
      <ul>
        {credits.cast.map(credit => {
          return (
            <li key={credit.id}>
              <img
                width="100px"
                height="150px"
                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                alt={credit.name}
              />
              <h3>{credit.name}</h3>
              <p>{credit.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}
