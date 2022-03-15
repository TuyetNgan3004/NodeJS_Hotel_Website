const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = new Schema ({
    r_name: { type: String, maxLength: 255 },
    r_people: { type: String, maxLength: 255 },
    r_price: { type: String, maxLength: 255 },
    r_img: { type: String, maxLength: 255 },
    r_desc: {type: String, maxLength: 255},
    r_bed: { type: String, maxLength: 255 },
    r_utilities: { type: String, maxLength: 255 }
});

module.exports = mongoose.model('Room', Room );


