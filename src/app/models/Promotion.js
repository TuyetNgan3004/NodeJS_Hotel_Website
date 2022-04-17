const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotion = new Schema({
    MaKM: { type: String, maxLength: 600 },
    GiaKM: { type: String, maxLength: 400 },
    NgayApDung: { type: String, maxLength: 400 },
    NgayHetHan: { type: String, maxLength: 400 },
    NoiDungKM: { type: String, maxLength: 1000 },
}, {
    timestamps: true,
});


module.exports = mongoose.model('promotion', promotion);