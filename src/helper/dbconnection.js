const config = require('config');
const dbConfig = config.get('db');
const mongoose = require('mongoose');
const path = require('path');
const logger = require("../helper/Logger")(path.basename(__filename));
const fileName = "mongodbconnectionjs";
mongoose.connect(dbConfig.get('connectionURL'), { useCreateIndex: true, useNewUrlParser: true });

//Getting mongoose to use ht globel promise library
mongoose.Promise = global.Promise;

// Getting default connectuon
var db = mongoose.connection;

//Connection events
// When successfully connected
db.on("connceted",function(){
    logger.info("Database connected successfully !" , fileName);
});

//If the connection throws any error
db.on("error", function(error){
    logger.info("Database connected successfully !" + error , fileName);
});

module.exports = {
    User: require('../models/user.model'),
    Role: require("../models/role.model"),
    UserRoleMapping: require("../models/userrole.model"),
};

