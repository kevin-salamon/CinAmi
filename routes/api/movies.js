const router = require("express").Router();
const movieController = require("../../controllers/movieController");

router.route("/")
    .get(movieController.getSavedMovies)
    .post(movieController.saveMovie);

router.route("/:id")
    .delete(movieController.removeMovie)
    .put(movieController.updateMovieComments)

module.exports = router;