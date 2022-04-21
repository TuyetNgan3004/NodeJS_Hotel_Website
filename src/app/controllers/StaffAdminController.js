const Room = require('../models/Room');
const Customer = require('../models/Customer');
const Staff = require('../models/Staff');

const { multipleToObject } = require('../../config/utility/mongoose');
const { mongooseToObject } = require('../../config/utility/mongoose');


const show =  (req, res, next) => {
    Staff.find()
        .then(staffs => {
            res.render('TabStaffAdmin/staffAdmin', { layout: 'mainAdmin.hbs', staffs: multipleToObject(staffs) });
        })
        .catch(next);
}

const add =  (req, res, next) => {
    Staff.find()
        .then(staffs => {
            res.render('TabStaffAdmin/addStaffAdmin', { layout: 'mainAdmin.hbs', 
            staffs: multipleToObject(staffs) });
        })
        .catch(next);
}

const  edit =(req, res, next) => {
    Staff.findById(req.params.id)
        .then(staffs => res.render('TabStaffAdmin/editStaffAdmin',{ layout: 'mainAdmin.hbs',
        staffs: mongooseToObject(staffs)
        }))
        .catch(next);
}

const update = (req, res, next) => {
    Staff.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/admin/staff'))
        .catch(next);
}

const store =  (req, res, next) => {
    const staff = new Staff(req.body);
    staff.save() 
        .then( res.redirect('/admin/staff'))
        .catch(error =>{
        })     
}

const deleteModal =  (req, res, next) => {
      Staff.deleteOne({_id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
}

module.exports = {  show, add, store, edit, deleteModal, update };