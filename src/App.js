import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// c35cbe94

const API_URL = "https://www.omdbapi.com/?apikey=c35cbe94"

 const movie1 = {
"Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg",
"Title" : "Italian Spiderman",
"Type" : "movie",
"Year" : "2007",
"imdbID": "tt2705436"

 }

const App = () =>{
  const [ movies, setMovies] = useState ([]);

  const [searchTerm, setSearchTerm] = useState ('');

const searchMovies = async(title) =>{
  const response = await fetch (`${API_URL}&s=${title}`);
  const  data = await response.json();

  setMovies(data.Search || [])
 
}
useEffect(() => {
   searchMovies('Spiderman')
}, [])


  return (
   <div className = 'app'>
  <h1> MovieLand</h1>

  <div className="search">
    <input
     placeholder='Search for movies'
     value= {searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
    />

    <img 
    src={SearchIcon}
    alt='search'
      onClick={() =>  searchMovies(searchTerm)}
    />
 </div>
    {
      movies?.length > 0 
      ? ( 
         <div className='container'>
       {movies.map((movie) =>(
        <MovieCard movie={movie} />
       ))}
    </div>
      ) :  (
        <div className='empty'> 
          <h2>No movies found</h2>
        </div>
      )
    }


   
    
  </div>
  
   
    
  );
}

export default App;
