const router = require("express").Router();
const movieController = require("../../controllers/movieController");
const auth = require("../../middleware/auth");

router.route("/")
    .get(movieController.getSavedMovies)
    .post(movieController.saveMovie);

router.route("/:id")
    .delete( movieController.removeMovie)
    .put(movieController.updateMovie);

module.exports = router;