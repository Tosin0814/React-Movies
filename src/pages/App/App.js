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

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path='/movies/:movieName' element={<MovieDetailPage/>} /> 
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <LoginPage/>
      }
    </main>
  );
}

