const express = require('express');
const router = express.Router();
const registerController = require("../controllers/register.controller")

//Login controller called
router.post("/", registerController.register);

module.exports = router;