import React from 'react'
import '../pagestyle.css';
import CommentsModalNotLogged from "./CommentsModalNotLogged";

function MoviePrintNotLogged(props) {

    let totalRating = 0;
    for (let number of props.rating) {
        totalRating += +number;
    }

    let averageRating = (totalRating / props.rating.length).toFixed(2);
    if (isNaN(averageRating)) {
        averageRating = 0;
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
            <p className="movie-rating">Your friends have rated this movie <span style={{fontSize: "1.2em", textDecoration: "underline"}}>{averageRating}/5</span> stars on average.</p>
            <CommentsModalNotLogged
                movieId={props.movieId}
                handleGetSavedMovies={props.handleGetSavedMovies}
                comments={props.comments}
            />
        </div>
    );
};
  
export default MoviePrintNotLogged;