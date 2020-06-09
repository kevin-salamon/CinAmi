import React from "react";
import "../pagestyle.css";
import AddMovieModal from "./AddMovieModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

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
                <LoginModal 
                    handleGetSavedMovies={props.handleGetSavedMovies}
                />
                <RegisterModal 
                    handleGetSavedMovies={props.handleGetSavedMovies}
                />
            </nav>
        </>
    );
};



export default Header;