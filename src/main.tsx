import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import './index.css';
import Genre from './pages/Genre';
import Serie from './pages/Serie';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='movie/:id' element={<Movie />} /> */}
          <Route path='movie' element={<Movie />} />
          <Route path='genre' element={<Genre />} />
          <Route path='serie' element={<Serie />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
