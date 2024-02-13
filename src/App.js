import './App.css';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import api from './assets/AnimeService';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [anime, setAnime] = useState();
  const [reviews, setReviews] = useState([]);
  const [animes, setAnimes] = useState();

  const getAnimes = async() => {
    try {
      const response = await api.get("/animes");
      setAnimes(response.data);
    } catch(err) {
      console.error(err);
    }
  }

  const getAnimeData = async(animeId) => {
    try 
    {
      const response = await api.get(`/animes/${animeId}`);
      const singleAnime = response.data;
      setAnime(singleAnime);
      setReviews(singleAnime.reviewIds);
    }
    catch (err)
    {
      console.error(err);
    }
  }

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home animes={animes} />}></Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
        <Route path='/Reviews/:animeId' element={<Reviews getAnimeData={getAnimeData} anime={anime} reviews={reviews} setReviews={setReviews} />} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
