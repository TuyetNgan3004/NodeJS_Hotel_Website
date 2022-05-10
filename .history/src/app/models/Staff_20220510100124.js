const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Staff = new Schema({
    s_id: { type: String, maxLength: 255 },
    s_email: { type: String, maxLength: 255 },
    s_name: { type: String, maxLength: 255 },
    s_datebirth: { type: String, maxLength: 255 },
    s_phone: { type: String, maxLength: 255 },
    s_account: { type: String, maxLength: 255 },
    s_password: { type: String, maxLength: 255 },
    s_position: { type: String, maxLength: 255 },

}, {
    timestamps: true
});

module.exports = mongoose.model('Staff', Staff);