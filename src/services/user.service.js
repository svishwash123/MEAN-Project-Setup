const db = require('../helper/dbconnection');
const bcrypt = require('bcryptjs');
const User = db.User;
const path = require('path');
const logger = require("../helper/Logger")(path.basename(__filename));

module.exports = {
    getById,
    create
};

/**
 * Get User by id
 */
async function getById(id) {
    return await User.findById(id);
}

async function create(userParam) {

    // validate
    if (await User.findOne({ username: userParam.username })) {
        logger.info("Duplicate user found ");
        throw 'Username "' + userParam.username + '" is already taken';
    }
    const user = new User(userParam);

    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }else{
        throw 'Password required';
    }
    return await user.save();
}