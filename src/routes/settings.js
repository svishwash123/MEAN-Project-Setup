const express = require('express');
const router = express.Router();
const settingController = require("../controllers/settings.controller");


//Login controller called
router.post("/role/save", settingController.saveRole);

module.exports = router;