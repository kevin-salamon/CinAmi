const router = require("express").Router();
const movieController = require("../../controllers/movieController");
const auth = require("../../middleware/auth");

router.route("/")
    .get(movieController.getSavedMovies)
    .post(auth, movieController.saveMovie);

router.route("/:id")
    .delete(auth, movieController.removeMovie)
    .put(auth, movieController.updateMovie);

module.exports = router;