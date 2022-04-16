const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedback = new Schema({
    tenKH: { type: String, maxLength: 600 },
    sdtKH: { type: String, maxLength: 400 },
    contentFB: { type: String, maxLength: 1000 },
}, {
    timestamps: true,
});


module.exports = mongoose.model('feedback', feedback);