import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Movies } from '../pages/movies/Movies';
import { Home } from 'pages/home/Home';
import { Header } from './header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
