const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    active: { type: Boolean, required: true, default: 1 },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    blocked: { type: Boolean, required: true, default: 0 },
}, { collection: 'user' });

module.exports = mongoose.model("user", UserSchema);

