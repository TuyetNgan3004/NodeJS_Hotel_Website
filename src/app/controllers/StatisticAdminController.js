const Customer = require('../models/Customer');
const Bill = require('../models/Bill');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');

const statisticDay = async (req, res, next) => {
   res.render('TabStatisticAdmin/statisticAdmin', { layout: 'mainAdmin.hbs' });
}

const filterMonth = async (req, res, next) => {
   const inputMonth = req.body.month;
   console.log(inputMonth)
}

module.exports = { statisticDay, filterMonth };
