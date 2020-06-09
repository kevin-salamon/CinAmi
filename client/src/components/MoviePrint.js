import React from 'react'
import '../pagestyle.css';
import CommentsModal from "./CommentsModal";
import { removeMovie } from "../utils/API";

function MoviePrint(props) {

    function handleRemoveMovie(movieId) {
        removeMovie(movieId)
          .then(props.handleGetSavedMovies)
          .catch(err => console.log(err));
    }

    let totalRating = 0;
    for (let number of props.rating) {
        totalRating = totalRating + number;
    }

    let averageRating = totalRating / props.rating.length;
    if (isNaN(averageRating)) {
        averageRating = "*";
    }

    return (
        <div className="movie-flex-container" style={{background: `linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
          ), url(${props.background}) center`,     
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          OBackgroundSize: "cover",
          backgroundSize: "cover"}}>
            <h1 className="movie-title">{props.title}</h1>
            <p className="movie-desc">{props.desc}</p>
            <p className="movie-rating">Your friends have rated this movie {averageRating}/5 stars</p>
            <CommentsModal
                movieId={props.movieId}
                handleGetSavedMovies={props.handleGetSavedMovies}
                comments={props.comments}
            />
            <button className="remove-movie" onClick={() => handleRemoveMovie(props.movieId)}>X</button>
        </div>
    );
};
  
export default MoviePrint;