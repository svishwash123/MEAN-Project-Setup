const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var requesterSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    allowed : {type :Boolean,required:true, default:1}

}, { collection: 'role' });

module.exports = mongoose.model("userRoleMapping", roleSchema);