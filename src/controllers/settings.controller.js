const express = require('express');
const roleService = require('../services/role.service');
const path = require('path');
const logger = require("../helper/Logger")(path.basename(__filename));


module.exports = {
    saveRole: async (req, res, next) => {
      logger.info("Setting controller called, Saving role");
      let roleData = req.body;
      roleService.createNewRole(roleData).then(data => {
        res.send(data);
      }).catch(error => {
        res.status(400).send(error);
      });
    }
  }