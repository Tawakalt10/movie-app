import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

// c35cbe94

const API_URL = "http://www.omdbapi.com?apikey=c35cbe94 "

 const movie1 = {
"Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg",
"Title" : "Italian Spiderman",
"Type" : "movie",
"Year" : "2007",
"imdbID": "tt2705436"

 }

const App = () =>{

const searchMovies = async(title) =>{
  const response = await fetch (`${API_URL}&s=${title}`);
  const  data = await response.json();

  console.log(data.Search)

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
     value="Superman"
     onChange={() => {}}
    />

    <img 
    src={SearchIcon}
    alt='search'
      onClick={() => {}}
    />
 </div>
    <div className='container'>
      <div className='movie'>
         <div> 
          <p> {movie1.Year}</p>
         </div>

         <div>
          <img src = { movie1.Poster !== 'N/A' ? movie1.Poster: 'https://via.placeholder.com/ 400'}
          alt={movie1.Title}
          />

          
         </div>
      </div>
    </div>
    
  </div>
  
   
    
  );
}

export default App;
