const express = require('express');
const httpError = require ("http-errors");
const app  = express();
const cookieParser = require("cookie-parser");
const config = require('config');
const appConfig = config.get('app');
//Https or htto
const protocal = appConfig.https == true ? require("https") :  require("http") ;
const path = require('path');
const logger = require("./src/helper/Logger")(path.basename(__filename));

// Express json middleware
app.use(express.json());

//Url encode middleware
app.use(express.urlencoded({extended : false}));

// Cookies paser middleware
app.use(cookieParser());

/**
 * Include all controller file here and use it below on url called
 */
const loginRouter =  require("./src/routes/login");
const registerRouter =  require("./src/routes/register");
const settingsRouter =  require("./src/routes/settings");

/**
 * Login router 
 */
app.use("/login",loginRouter);

/**
 * Register router
 */
app.use("/register",registerRouter);

/**
 * Settings router
 */
 app.use("/settings",settingsRouter);

/**
 * This default controller which is use to send error code
 * if no controller found
 */
app.use((req,res,next) =>{
    next(httpError(404));
})

//Server config

var server = protocal.createServer(app)
server.listen(appConfig.get("port"));