const express = require("express");

// importing routes
const router = express.Router();

// importing controllers
const controllers = require("../controllers/studentsControllers");

// importring middleware
const requireAuth = require("../middleware/requireAuth");


// middleware
router.use(requireAuth);

router.get("/", controllers.getStudents);


module.exports = router;