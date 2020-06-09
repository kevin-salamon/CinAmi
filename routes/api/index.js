const router = require("express").Router();
const movieRoutes = require("./movies");
const userRoutes = require("./users");
const authRoutes = require("./auth")

router.use("/movies", movieRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
