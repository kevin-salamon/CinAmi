import React, { useRef } from 'react'
import '../pagestyle.css';
import EditCommentsModal from "./EditCommentsModal";
import { updateMovie} from "../utils/API";

function MoviePrint(props) {

    const commentRef = useRef();

    function handleUpdateMovie(movieId, movieData) {
        updateMovie(movieId, movieData)
          .then(props.handleGetSavedMovies())
          .catch(err => console.log(err));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newComment = {
            comments: commentRef.current.value,
        };

        handleUpdateMovie(props.movieId, newComment);
    }

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
            <p>{props.rating} stars</p>
            <form>
                <div className="form-group text-center">
                    <input
                        className="input"
                        ref={commentRef}
                        type="text"
                        placeholder="Add your comment"
                    />
                    <button>Submit</button>
                </div>
            </form>
            <EditCommentsModal
                comments={props.comments}
            />
        </div>
    );
};
  
export default MoviePrint;