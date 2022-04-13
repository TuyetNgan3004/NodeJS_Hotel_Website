const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = new Schema ({
    r_name: { type: String, maxLength: 255 },
    r_type: { type: String, maxLength: 255 },
    r_number: { type: String, maxLength: 255 },
    r_people: { type: String, maxLength: 255 },
    r_price: { type: String, maxLength: 255 },
    r_img: { 
        thumbnail: { type: String, maxLength: 255 },
        img1: { type: String, maxLength: 255 },
        img2: { type: String, maxLength: 255 }
    },
    r_desc: {type: String, maxLength: 255},
    r_bed: { type: String, maxLength: 255 },
    r_utilities: { type: String, maxLength: 255 },
    r_status: { type: String, maxLength: 255 },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Rooms', Room );


