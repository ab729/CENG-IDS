const express = require('express');


// importing routes
const router = express.Router();

// importing controllers
const getTeachers = require("../controllers/teachersControllers");


router.get("/", getTeachers.getTeachers);




module.exports = router;