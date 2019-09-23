const express = require('express');
const router = express.Router();
const loginController = require("../controllers/login.controller")

//Login controller called
router.post("/", loginController.authenticate);

module.exports = router;