const express = require('express');
const path = require('path');
const logger = require("../helper/Logger")(path.basename(__filename));


module.exports = {
    authenticate
}

/**
 * Authentication user
 * if user name and password is valid then send jwt tokem in response 
 * for next authorization
 */
async function authenticate (req, res, next) {
    logger.info("Login authenticate controller called");
    let a = await validateUserLoginParam("user")
    res.send(a)
};


/**
 * Valiating user paramter required for login
 * Note :  Not required to check it it will be handled by monogo db
 */
async function validateUserLoginParam(userLoginData){
    logger.info("User login form data validating");
    return await true;
};

