import React, { Component } from "react";
import HeaderNotLogged from "../components/HeaderNotLogged";
import MoviePrintNotLogged from "../components/MoviePrintNotLogged";
import { getSavedMovies } from "../utils/API";
import "../pagestyle.css";
import { getJWT } from "../helpers/jwt";
import { Redirect } from "react-router-dom";

class NotLogged extends Component {
    state = {
        search: "",
        movieList: [],
        userToken: undefined
    }

    componentDidMount() {
        const jwt = getJWT();
        if (jwt) {
            this.props.history.push("/");
        }
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

        const jwt = getJWT();
        if (jwt) {
            return <Redirect to='/'/>
        }

        return (
            <>
                <HeaderNotLogged
                    handleGetSavedMovies={this.handleGetSavedMovies}
                    history={this.props.history}
                />
                <div className="top-flex-container">
                    <h1>Welcome to <span style={{textDecoration: "underline", fontSize: "50px"}}>CinAmi</span></h1>
                    <p>Rate, review, and enjoy movies with your friends. Don't see your favorite movie here? Add it in yourself, and see what your buddies have to say!
                    You can filter through the list of available movies with the search bar here.
                    </p>
                    <form className="form">
                            <input
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
                            <h1 className="text-center intro-text">There are no movies listed to here yet. To get started, click on the big "Add Movie" button at the top of the screen,
                            and tell us what you like!
                            </h1>
                        </div>
                    </div>
                ) : (
                    <div className="flex-container">
                        {filteredMovies.map(movie => {
                            return(
                                <>                
                                    <MoviePrintNotLogged 
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


export default NotLogged;