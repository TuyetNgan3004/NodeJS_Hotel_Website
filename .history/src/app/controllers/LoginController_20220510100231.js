const Staff = require('../models/Staff');

class LoginController {
    //[GET] /
    showPage(req, res, next) {
        res.render('TabLogin/login', { layout: 'mainClient.hbs' });
    }

    //[POST] /
    login(req, res, next) {
        const { s_email, s_password } = req.body;
        // console.log(s_email);
        Staff.findOne({ s_account: s_email })
            .then(staff => {
                if (!staff) {
                    req.session.message = {
                        type: 'danger',
                        intro: 'Email không tồn tại',
                    }
                    return res.redirect('/login');
                } else if (staff.s_password !== s_password) {
                    req.session.message = {
                        type: 'danger',
                        intro: 'Mật khẩu không đúng',
                    }
                    return res.redirect('/login');
                }
                res.redirect('/admin/room');
            })
            .catch(next);
    }
}

module.exports = new LoginController;