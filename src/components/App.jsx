import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Header } from './header/Header';
// import { Home } from '../pages/home/Home';
// import { Movies } from 'pages/movies/Movies';
// import { Cast } from './cast/Cast';
// import { Reviews } from './reviews/Reviews';
// import { MovieDetails } from 'pages/movieDetails/MovieDetails';

const Home = lazy(() => import('../pages/home/Home'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
