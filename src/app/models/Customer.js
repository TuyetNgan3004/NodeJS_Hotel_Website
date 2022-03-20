const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema ({
    c_name: { type: String, maxLength: 255 },
    c_phone:{ type: String, maxLength: 255 },
    c_email:{ type: String, maxLength: 255 },
    c_checkin:{ type: String, maxLength: 255 },
    c_checkout:{ type: String, maxLength: 255 },
    roomID: { type: String, ref: 'Rooms'},
},{
    timestamps: true
});

module.exports = mongoose.model('Customer', Customer );