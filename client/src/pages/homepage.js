import React, { Component } from "react";
import Header from "../components/Header";
import MoviePrint from "../components/MoviePrint";
import { removeMovie, getSavedMovies, updateMovieComments } from "../utils/API";
import "../pagestyle.css";

class Homepage extends Component {
    state = {
        searchTerm: "",
        movieList: []
    }

    componentDidMount() {
        this.handleGetSavedMovies();
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
        updateMovieComments(movieId, movieData)
          .then(this.handleGetSavedMovies)
          .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.handleGetSavedMovies();
        this.setState({
          searchTerm: ""
        });
    };

    render() {
        return (
            <>
                <Header 
                    handleGetSavedMovies={this.handleGetSavedMovies}
                />
                {!this.state.movieList.length ? (
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="text-center intro-text">No movies yet!</h1>
                        </div>
                    </div>
                ) : (
                    <div className="flex-container">
                    {this.state.movieList.map(movie => {
                        return(
                            <>                
                                <MoviePrint 
                                    background={movie.picture}
                                    title={movie.title}
                                    desc={movie.description}
                                    comments={movie.comments}
                                />
                            </>
                        );
                    })}
                    </div>
                )}
            </>
         );
    };


}


export default Homepage;