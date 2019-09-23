const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var reigniteClientSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    componeyName: { type: String, required: true },
    address: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    active: { type: Boolean, required: true, default: 1 },
    blocked: { type: Boolean, required: true, default: 0 }

}, { collection: 'reignite_client' });

module.exports = mongoose.model("ReigniteClient", reigniteClientSchema);