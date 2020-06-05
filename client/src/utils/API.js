import axios from "axios";

export const saveMovie = movieData => {
  return axios.post("/api/movies", movieData);
}

export const getSavedMovies = () => {
  return axios.get("/api/movies");
}

export const removeMovie = movieId => {
  return axios.delete(`/api/movies/${movieId}`);
}

export const updateMovieComments = (movieId, movieData) => {
  return axios.put(`/api/movies/${movieId}`, movieData);
}

export default {
  saveMovie,
  getSavedMovies,
  removeMovie,
  updateMovieComments
}