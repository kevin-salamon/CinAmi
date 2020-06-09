const router = require("express").Router();
const authController = require("../../controllers/authController");
const auth = require("../../middleware/auth");

router.route("/")
    .post(authController.checkAuthUser);

router.route("/user")
    .get(authController.getAuthUser);

module.exports = router;