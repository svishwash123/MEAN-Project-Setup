const db = require('../helper/dbconnection');
const Role = db.Role;
const path = require('path');
const logger = require("../helper/Logger")(path.basename(__filename));

module.exports = {
    getById,
    createNewRole,
    findByRoleName
};

/**
 * Get User by id
 */
async function getById(id) {
    return await Role.findById(id);
};

/**
 * Create new role
 * @param {Role} roleParam 
 */
async function createNewRole(roleParam) {
    const {roleName} = roleParam.name;
    // validate
    if (await Role.findOne({ name: roleName})) {
        logger.info("Duplicate role found");
        throw 'Role "' + roleName + '" is already taken';
    }
    const role = new Role(roleParam);
    return await role.save();
};

/**
 * Get role by name
 * @param {role name string} role
 */
async function findByRoleName(roleName){
    return await Role.findOne({name : roleName});
}