const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var roleSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
}, { collection: 'role' });

module.exports = mongoose.model("userRoleMapping", roleSchema);