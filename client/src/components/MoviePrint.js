import React from 'react'
import '../pagestyle.css';
import CommentsModal from "./CommentsModal";

function MoviePrint(props) {

    return (
        <div className="movie-flex-container" style={{background: `linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
          ), url(${props.background}) center no-repeat`,     
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          OBackgroundSize: "cover",
          backgroundSize: "cover"}}>
            <h1 className="movie-title">{props.title}</h1>
            <p className="movie-desc">{props.desc}</p>
            <CommentsModal
                movieId={props.movieId}
                handleGetSavedMovies={props.handleGetSavedMovies}
                comments={props.comments}
            />
        </div>
    );
};
  
export default MoviePrint;