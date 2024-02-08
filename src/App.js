import './App.css';
import { useState, useEffect } from 'react';
import { getAllAnimes }  from './assets/AnimeService';  
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {

  const [animes, setAnimes] = useState();

  const getAnimes = async() => {
    try {
      const response = await getAllAnimes();
      setAnimes(response.data);
    } catch(err) {
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
