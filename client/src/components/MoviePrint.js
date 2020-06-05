import React from 'react';
import '../pagestyle.css';

function MoviePrint(props) {

    return (
        <div className="movie-flex-container" style={{background: `linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
          ), url(${props.background}) center no-repeat`,     
          webkitBackgroundSize: "cover",
          mozBackgroundSize: "cover",
          oBackgroundSize: "cover",
          backgroundSize: "cover"}}>
            <h1 className="movie-title">{props.title}</h1>
            <p className="movie-desc">{props.desc}</p>
            <p className="movie-desc">{props.comments}</p>
        </div>
    );
};
  
export default MoviePrint;