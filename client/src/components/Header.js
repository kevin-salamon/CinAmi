import React from "react";
import "../pagestyle.css";
import AddMovieModal from "./AddMovieModal";

function Header(props) {

    return (
        <>
            <nav className="nav header-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img src={require("../images/logo.png")} className="logo" alt={"logo"} />
                        </div>
                        <div className="col-lg-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <p className="header-description">Tagline here</p>
                        </div>
                        <div className="col-lg-1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <AddMovieModal 
                                handleGetSavedMovies = {props.handleGetSavedMovies}
                            />
                        </div>
                        <div className="col-lg-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                        <div className="col-lg-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <form className="form">
                            <input
                                className=""
                                value={props.searchTerm}
                                onChange={props.handleInputChange}
                                type="text"
                                placeholder="Search Movies"
                            />
                        </form>
                        </div>
                        <div className="col-lg-1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <button className="btn btn-info header-button">Login</button>
                        </div>
                        <div className="col-lg-1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <button className="btn btn-info header-button">Sign-up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};



export default Header;