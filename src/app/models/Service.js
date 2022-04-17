const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service = new Schema({
    MaDV: { type: String, maxLength: 600 },
    LoaiDV: { type: String, maxLength: 400 },
    TenDV: { type: String, maxLength: 400 },
    GiaDV: { type: String, maxLength: 400 },
    MotaDV: { type: String, maxLength: 1000 },
}, {
    timestamps: true,
});


module.exports = mongoose.model('service', service);