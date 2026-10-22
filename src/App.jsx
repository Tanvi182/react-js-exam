import { Routes,Route } from 'react-router-dom';

import Header from './components/Header/Header'
import MainLayout from './components/MainLayout/MainLayout'
import TvShows from './components/TvShows/TvShows'
import Latests from './components/Latests/Latests'
import Episodes from './components/Episodes/Episodes'
import Movies from './components/Movies/Movies'
// import './App.css'

function App() {

  return (
    <>
    <Header/>
    <MainLayout>

    <Routes>
      <Route path="/tvshows" element={<TvShows/>}></Route>
      <Route path="/latests" element={<Latests/>}></Route>
      <Route path="/episodes" element={<Episodes/>}></Route>
      <Route path="/movies" element={<Movies/>}></Route>

    </Routes>
    </MainLayout>
    </>
  )
}

export default App
