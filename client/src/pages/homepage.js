import React, { Component } from "react";
import Header from "../components/Header";
import MoviePrint from "../components/MoviePrint";
import { getSavedMovies } from "../utils/API";
import "../pagestyle.css";

class Homepage extends Component {
    state = {
        search: "",
        movieList: []
    }

    componentDidMount() {
        this.handleGetSavedMovies();
    }

    handleInputChange = (event) => {
        let searchTerm = event.target.value;
        this.setState({search: searchTerm});
    }

    handleGetSavedMovies = () => {
        getSavedMovies()
          .then((res) => {
            this.setState({ movieList: res.data })
          })
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

        let filteredMovies = this.state.movieList.filter((movie) => {
            return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        return (
            <>
                <Header 
                    handleGetSavedMovies={this.handleGetSavedMovies}
                />
                <div className="top-flex-container">
                    <h1>Welcome to CinAmi</h1>
                    <p>Rate, review, and enjoy movies with your friends. Don't see your favorite movie here? Add it in yourself, and see what your buddies have to say about your tastes!
                    You can filter through the list of available movies with the search bar below.
                    </p>
                    <form className="form">
                            <input
                                className="input"
                                value={this.state.search}
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Search Movies"
                            />
                    </form>
                </div>
                {!this.state.movieList.length ? (
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="text-center intro-text">No movies yet!</h1>
                        </div>
                    </div>
                ) : (
                    <div className="flex-container">
                        {filteredMovies.map(movie => {
                            return(
                                <>                
                                    <MoviePrint 
                                        key={movie._id}
                                        movieId={movie._id}
                                        background={movie.picture}
                                        title={movie.title}
                                        desc={movie.description}
                                        rating={movie.rating}
                                        comments={movie.comments}
                                        handleGetSavedMovies={this.handleGetSavedMovies}
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