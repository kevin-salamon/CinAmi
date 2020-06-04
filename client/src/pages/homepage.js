import React, { Component } from "react";
import "./pagestyle.css";

class Homepage extends Component {
    state = {
        searchTerm: "",
        movieList: [],
    }

    render() {
        return (
            <>
                <nav className="nav header-custom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <img src={require("../images/logo.png")} className="logo" alt={"logo"} />
                            </div>
                            <div className="col-lg-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p className="header-description">One-stop shopping for sharing movie reviews with friends</p>
                            </div>
                            <div className="col-lg-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                            <div className="col-lg-2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p>Search</p>
                            </div>
                            <div className="col-lg-1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p>Login</p>
                            </div>
                            <div className="col-lg-1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <p>Sign-up</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    };


}


export default Homepage;