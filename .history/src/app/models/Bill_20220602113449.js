const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    b_total: { type: String, maxLength: 255, default: 0 },
    b_status: { type: String, maxLength: 255, default: 'Chưa thanh toán' },
    b_service: [{type: Object}],
    customerID: { type: String, ref: 'Customers' },
}, {
    timestamps: true
});

module.exports = mongoose.model('Bill', Bill);

