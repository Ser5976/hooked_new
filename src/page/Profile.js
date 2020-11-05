import React,{useContext, Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import {MoviesContext} from '../context/MoviesContext'

export const Profile = ({match}) => {
   const { movies} = useContext(MoviesContext)
  // console.log(match)
  // console.log(movie)
   const urlTitle = match.params.name
   //console.log(urlTitle)

let film = {}
for(let i = 0; i < movies.length; i++){
     //console.log(movies[i])
     if(movies[i].Title === urlTitle){
        for(let key in movies[i]){
            film[key] = movies[i][key]
        }
       // console.log(film)
    }
 }

 return (
  <Fragment>
     <NavLink to = '/' exact className = 'nav-link'>Главная</NavLink>
       <div className = 'card md-4'>
          <div className = 'card-body'>
             <div className = 'row'>
                <div className = 'col-sm-4 '>
                      <img src = {film.Poster} alt = 'картинка' />
                </div>
                <div className = 'col'>
                    <div className = 'card-titele'>
                       <h1>{film.Title}</h1>
                       <h3> год: {film.Year}</h3>
                       <h3>imdbID:{film.imdbID}</h3>
                    </div>
                </div>
             </div>
          </div>
        </div>
    </Fragment>
    )
   
}