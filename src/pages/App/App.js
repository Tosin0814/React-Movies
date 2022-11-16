import './App.css';
import {Route, Routes} from 'react-router-dom'
import { useState } from 'react';

// Pages
import LoginPage from '../LoginPage/LoginPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MovieListPage from '../MoviesListPage/MoviesListPage';

// Components
import NavBar from '../../components/NavBar/NavBar'

// Data
import { movies } from '../../data';

export default function App() {
  const [user, setUser] = useState(null)
  const [movieList, setMovieList] = useState(movies)
  // console.log(movieList)

  const login = (name) => {
      setUser(name)
  }
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MovieListPage movieList={movieList}/>} />
            <Route path='/movies/:movieName' element={<MovieDetailPage movies={movieList}/>} /> 
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <LoginPage login={login}/>
      }
    </main>
  );
}

