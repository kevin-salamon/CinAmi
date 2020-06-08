import React from "react";
import "../pagestyle.css";
import AddMovieModal from "./AddMovieModal";

function Header(props) {

    return (
        <>
            <nav className="nav header-custom">
                <div className="header-title">
                    CinAmi
                </div>
                <AddMovieModal 
                        handleGetSavedMovies={props.handleGetSavedMovies}
                />
                <button className="btn btn-info header-button">Login</button>
                <button className="btn btn-info header-button">Sign-up</button>
            </nav>
        </>
    );
};



export default Header;