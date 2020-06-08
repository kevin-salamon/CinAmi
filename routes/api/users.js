const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.getSavedUsers)
    .post(userController.saveUser);

router.route("/:id")
    .delete(userController.removeUser)
    .put(userController.updateUser);

module.exports = router;