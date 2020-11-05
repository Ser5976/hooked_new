import React from "react"
import { NavLink } from 'react-router-dom'

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";//Причина в том DEFAULT_PLACEHOLDER_IMAGE, что некоторые фильмы, полученные из API, не имеют изображений, поэтому мы будем визуализировать изображение-заполнитель вместо неработающей ссылки.


const Movie = ({ movie }) => {
  //console.log(movie)
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster; 
  return (
    <div className="card">
      <div className = 'card-body'>
      <h2 className = 'card-titele'>{movie.Title}</h2>
    
        <img className = "img-responsive"
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
     </div>
      <p>({movie.Year})</p>
      <NavLink to = {'/profile/'+ movie.Title} className = 'nav-link'>Открыть</NavLink>
    </div>
  );
};


export default Movie;