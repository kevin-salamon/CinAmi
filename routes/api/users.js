const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.getSavedUsers)
    .post(userController.saveUser);

module.exports = router;