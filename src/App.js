import './App.css';
import { useState, useEffect } from 'react';
import { getAllAnimes }  from './assets/AnimeService';  

function App() {

  const [animes, setAnimes] = useState();

  const getAnimes = async() => {
    try {
      const response = await getAllAnimes();
      console.log(response.data);
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
      
    </div>
  );
}

export default App;
