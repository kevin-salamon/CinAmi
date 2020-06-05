import React from 'react'
import '../pagestyle.css';
import EditCommentsModal from "./EditCommentsModal";

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
            <div className="comment-container">
                {props.comments.map(comment => {
                    return(         
                            <p>{comment}</p>
                    );
                })}
            </div>
            <EditCommentsModal
                movieId={props.movieId}
                handleGetSavedMovies={props.handleGetSavedMovies}
            />
        </div>
    );
};
  
export default MoviePrint;