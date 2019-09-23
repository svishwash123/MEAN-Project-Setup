const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userRoleSchema = new mongoose.Schema({
    user_id : {
        type   : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required: true
    },
    role_id : {
        type   : mongoose.Schema.Types.ObjectId,
        ref : 'role',
        required: true
    }
},{ collection: 'user_role_mapping' });

userRoleSchema.index({'user_id': 1, 'role_id': 1}, {unique: true});

module.exports = mongoose.model("UserRoleMapping", userRoleSchema);
