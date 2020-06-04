import React, { Component } from "react";
import Header from "../components/Header";
import { removeMovie, getSavedMovies, updateMovie } from "../utils/API";
import "../pagestyle.css";

class Homepage extends Component {
    state = {
        searchTerm: "",
        movieList: [],
    }

    handleGetSavedMovies = () => {
        getSavedMovies()
          .then((res) => {
            this.setState({ movieList: res.data })
          })
          .catch(err => console.log(err));
    }

    handleRemoveMovie = movieId => {
        removeMovie(movieId)
          .then(this.handleGetSavedMovies)
          .catch(err => console.log(err));
    }

    handleUpdateMovie = (movieId, movieData) => {
        updateMovie(movieId, movieData)
          .then(this.handleGetSavedMovies)
          .catch(err => console.log(err));
      }

    render() {
        return (
            <>
                <Header />
            </>
        );
    };


}


export default Homepage;