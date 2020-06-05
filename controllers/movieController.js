const db = require("../models");

module.exports = {
  getSavedMovies: function(req, res) {
    db.Movie.find({}).then(dbMovieData => res.json(dbMovieData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  saveMovie: function(req, res) {
    db.Movie.create(req.body).then(dbMovieData => res.json(dbMovieData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  removeMovie: function(req, res) {
    db.Movie.remove({
      _id: req.params.id
    }).then(dbMovieData => res.json(dbMovieData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  // updateMovie: function(req, res) {
  //   db.Movie.findOneAndUpdate({ _id: req.params.id }, req.body)
  //   .then(dbMovieData => res.json(dbMovieData)).catch(err => {
  //     console.log(err);
  //     res.json(err);
  //   });
  // },
  updateMovieComments: function(req, res) {
    db.Movie.findOneAndUpdate({ _id: req.params.id }, { $push: {comments: req.body} })
    .then(dbMovieData => res.json(dbMovieData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  }
  // updateMovieRating: function(req, res) {
  //   db.Movie.findOneAndUpdate({ _id: req.params.id }, { $push: {rating: req.body} })
  //   .then(dbMovieData => res.json(dbMovieData)).catch(err => {
  //     console.log(err);
  //     res.json(err);
  //   });
  // }
};

