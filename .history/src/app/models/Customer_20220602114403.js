const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
    c_name: { type: String, maxLength: 255 },
    c_phone: { type: String, maxLength: 255 },
    c_email: { type: String, maxLength: 255 },
    c_checkin: { type: Date},
    c_checkout: { type: Date},
    c_total: { type: String, maxLength: 255 },
    c_status: { type: String, maxLength: 255, default: 'chờ xác nhận' },
    roomID: { type: String, ref: 'Rooms' },
}, {
    timestamps: true
});

module.exports = mongoose.model('Customers', Customer);