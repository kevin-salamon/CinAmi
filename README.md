# CinAmi

> A MERN-stack movie review app that allows the user and their friends to add, review, and comment on each film. Supports JWT login and authentication.

---

```javascript
import React, { Component } from "react";
import Header from "../components/Header";
import MoviePrint from "../components/MoviePrint";
import { getSavedMovies } from "../utils/API";
import "../pagestyle.css";

class Homepage extends Component {
    state = {
        search: "",
        movieList: []
    }
```

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Support](#support)
- [License](#license)

---

## Installation

### Clone

- Clone this repo to your local machine using: https://github.com/kevin-salamon/CinAmi.git

### Setup

> run 'npm install' in your CLI of choice in the project root directory.

```shell
$ npm install
```

> After installation, the program can be run with 'npm start' from the root directory.

```shell
$ npm start
```

---

## Features

#### CinAmi allows users to view an ever-changing database of user-submitted movies, afterwhich they can learn about, rate, and review those movies.
- JSON Web Tokens and BcryptJS work together to authenticate users and then keep their information hidden from others.
- Easy-to-use UI makes for a streamlined user experience - it is very simple to add movies, comments, and ratings, and to filter through all available submitted movies.

## Usage
- To begin, users are encouraged to create an account by "signing-up" in the top-righthand corner, or to log-in if an account has already been created. Without an account, users will not be able to contribute movies, comments, or ratings.
- Viewing existing movies is simple - all available movies will appear towards the bottom of the screen. A search bar above these movies allows users to filter the movies based on title. 
- Should a user want to create a movie, they simple have to click the large "add movie" button on the top navbar, and submit a title, description, and picture URL. Only administrators can delete movies from the database (by clicking the 'X' button within each movie block).
- To view comments and add comments/ratings, simply click on the 'reviews' button within each movie block. A submission of a full review is one comment and one rating. Each user may only review each movie one time.
---

## Support

For problems, questions, or comments, reach out to me below:

- Email at theksalamon@gmail.com
- LinkedIn at https://www.linkedin.com/in/kevin-salamon/
- GitHub at https://github.com/kevin-salamon

---

## License

- **This project is licensed under the terms of the MIT license.**
- Copyright 2020 © Kevin Salamon