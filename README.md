# CinAmi

> A MERN-stack movie review app that allows the user and their friends to add, review, and comment on each film. Supports JWT login and authentication, and hashes passwords with BCryptJS.
> The greek-root word Cinema (for "record, write") and latin-rooted Amis (for 'friend') combine to make an app that all your friends will love to use for their movie-going needs.

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
- [Usage](#usage)
- [Support](#support)
- [License](#license)

---

## Installation

#### The development mode of this app uses MongoDB + the MongoDB CLI in order to run - please ensure that your machine possesses the same in order for the app to function locally.

### Clone

> Clone this repo to your local machine using: https://github.com/kevin-salamon/CinAmi.git

### Setup

> Run 'npm install' in your CLI of choice in the project root directory.

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
- Fully mobile-responsive site.

## Usage
- To begin, users are encouraged to create an account by registering in the top-righthand corner, or to log-in if an account has already been created. Without an account, users will not be able to contribute movies and reviews, and will not be able to delete movies. They will only be able to view movies and reviews.
- Viewing existing movies is simple - all available movies will appear towards the bottom of the screen. A search bar above these movies allows users to filter the movies based on title. 
- Should a user want to create a movie, they simple have to click the large "add movie" button on the top navbar, and submit a title, description, and picture URL, while logged in. To delete a movie, simply click the red X button towards the bottom of each movie box.
- To view comments and add comments/ratings, simply click on the 'reviews' button within each movie block. A submission of a full review is one comment and one rating. Each user may only review each movie one time. Even users who are not logged-in may view reviews.

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