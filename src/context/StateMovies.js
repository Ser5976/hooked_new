import React, { useReducer } from "react";
import axios from "axios";
import { MoviesContext } from "./MoviesContext";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours
const initialState = {
  movies: [],
  loading: true,
  errorMessage: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case "SEARCH_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };
    default:
      return state;
  }
};

export const StateMovies = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchMovies = async () => {
    const response = await axios.get(MOVIE_API_URL);
    dispatch({
      type: "SEARCH_MOVIES_SUCCESS",
      payload: response.data.Search,
    });
  };

  const search = async (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    const response = await axios(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`
    );

    if (response.data.Response === "True") {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: response.data.Search,
      });
    } else {
      dispatch({
        type: "SEARCH_MOVIES_FAILURE",
        payload: response.data.Error,
      });
    }
  };

  /*  const searchMovie = async (title) => {
      dispatch({
        type: "SEARCH_MOVIES_REQUEST"
      });
    const response = await axios(`https://www.omdbapi.com/?s=${title}&apikey=4a3b711b`)
          dispatch({
            type: "SEARCH_MOVIE_SUCCESS",
            payload: response.data.Search
          }); 
  	}*/

  const { movies, loading, errorMessage } = state;
  //console.log(movies)
  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        errorMessage,
        search,
        searchMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
