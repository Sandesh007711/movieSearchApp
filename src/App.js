import { useEffect,useState } from 'react';
import'./App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import './App.css';
//3e757983
const API_URL = 'https://www.omdbapi.com?apikey=3e757983'


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');

  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&S=${tittle}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('spiderman');

  },[]);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
        placeholder="Search for movies"
        value={searchTerms}
        onChange={(e) =>setSearchTerms(e.target.value)}

        
        
        />
        <img
          src ={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerms)}

         />

       
           


      </div>
      {
          movies?.length > 0
          ?(
            <div className="container">  
            {movies.map((movie) =>(
              <MovieCard movie = {movie} />
            ))}
            

            </div>

          ): (
            <div className='empty'>
              <h2>No Movies found</h2>
            </div>
          )
        }
      


     
    </div>
  );
}

export default App;
