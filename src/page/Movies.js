import React, { useEffect, useContext } from "react";
import Movie from "../componens/Movie";
import { MoviesContext } from "../context/MoviesContext";

const Movies = () => {
  const { movies, loading, errorMessage, searchMovies } = useContext(
    MoviesContext
  );
  //console.log(movies)

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container pt-2">
      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className="text-center text-danger">{errorMessage}</div>
      ) : (
        <div className="row">
          {movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
