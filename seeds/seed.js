const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/movies"
);

const Seed = [
  {
    title:'Avengers: Endgame',
    picture:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
    description:'A man finally marries and has children, but sacrifices his life because no one has enough grip strength to hold on to a damn gauntlet.',
    rating: 5,
    comments: ["My favorite movie of all time!", "Knocked my socks off!"],
  },
  {
    title:'Kingsman',
    picture:'https://m.media-amazon.com/images/M/MV5BMTkxMjgwMDM4Ml5BMl5BanBnXkFtZTgwMTk3NTIwNDE@._V1_.jpg',
    description:'Colonel Fury loses his mind and tries to destory the world with the power of music. Taron Egerton must stop skateboarding long enough to stop him.',
    rating: 5,
    comments: ["I will watch anything with Colin Firth in it.", "Hahaha people's heads go boom."],
  }
];

db.Movie.remove({})
  .then(() => db.Movie.collection.insertMany(Seed))
  .then(data => {
    console.log("Original movies deleted. " + data.result.n + " movies added.");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
