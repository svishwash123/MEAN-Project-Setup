const userService = require('../services/user.service');
const roleService = require('../services/role.service');
const userRoleService = require('../services/userrole.service');
const path = require('path');
const logger = require("../helper/Logger")(path.basename(__filename));

module.exports = {
  register: async (req, res, next) => {
    logger.info("Register controller called");
    let userData = req.body;
    userService.create(userData).then(async (data) => {
      const { username, firstName, lastName, _id } = data;
      let user = {};
      user.username = username;
      user.fullName = firstName + " " + lastName;
      const role = await roleService.findByRoleName('User');
      // Save User Role 
      let userRoleMapping = {}
      userRoleMapping.user_id = _id
      userRoleMapping.role_id = role._id;
      const dbUserRoleMap = await userRoleService.createNewUserRoleMapping(userRoleMapping);
      res.send(dbUserRoleMap);
    }).catch(error => {
      res.status(400).send(error);
    });

  }
}

