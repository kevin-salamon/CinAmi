import React from "react";
import "../pagestyle.css";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function HeaderNotLogged(props) {

    return (
        <>
            <nav className="nav header-custom">
                <div className="header-title">
                    CinAmi
                </div>
                <button className="btn btn-info header-button-add" style={{margin: "0 auto"}} onClick={() => alert("Please log-in to use this feature.")}>
                    Add Movie
                </button>
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



export default HeaderNotLogged;