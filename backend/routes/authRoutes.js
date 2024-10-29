const express = require("express");

// importing routes
const router = express.Router();

// importing controllers
const controllers = require("../controllers/authController");

router.post("/", controllers.loginAuth);

module.exports = router;
