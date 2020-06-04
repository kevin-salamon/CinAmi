import React, { Component } from "react";
import Header from "../components/Header";
import "../pagestyle.css";

class Homepage extends Component {
    state = {
        searchTerm: "",
        movieList: [],
    }

    render() {
        return (
            <>
                <Header />
            </>
        );
    };


}


export default Homepage;