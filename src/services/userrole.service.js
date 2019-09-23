const db = require('../helper/dbconnection');
const UserRoleMapping = db.UserRoleMapping;
const path = require('path');
const logger = require("../helper/Logger")(path.basename(__filename));

module.exports = {
    createNewUserRoleMapping
};

async function createNewUserRoleMapping(userRole){
    logger.info("Saving user role mapping");
    const userRoleMapping = new UserRoleMapping(userRole);
    return await userRoleMapping.save();
}