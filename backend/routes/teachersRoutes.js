const express = require('express');


// importing routes
const router = express.Router();

// importing controllers
const controllers = require("../controllers/teachersControllers");

// middlewares
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);


router.get("/", controllers.getTeachers);



module.exports = router;