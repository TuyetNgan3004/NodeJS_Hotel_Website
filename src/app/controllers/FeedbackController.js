const Feedback = require('../models/Feedback');
const { multipleToObject } = require ('../../config/utility/mongoose');
const { mongooseToObject } = require ('../../config/utility/mongoose');



class FeedbackController {
    // [GET] /feedback/
    create(req, res, next) {
        res.render("TabFeedback/createFB", { layout: 'mainClient.hbs' });
    }

    //[POST] /feedback/
    recieve(req, res, next) {
            console.log(req.body);
            const feedback = new Feedback(req.body);
            feedback
                .save()
                .then(() => res.redirect('/feedback'))
                .catch(next);
        }
        //[GET] /feedback/store 
    store(req, res, next) {
        Feedback.find({})
            .then(feedback => res.render("TabFeedback/feedbacklist", {
                layout: 'mainAdmin.hbs',
                feedback: multipleToObject(feedback)
            }))
            .catch(next);
    }

    deleteModal(req, res, next) {
        Feedback.deleteOne({_id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }

    // quickSearchRoom = async (req, res, next) => {
    //     // lấy giá trị bấm bên categories
    //     let attribute = req.params.attribute;
    //     let feedback = await Feedback.find();
    //     let result = feedback.filter((f) => {
            
    //         return f.r_type.toLowerCase().indexOf(attribute.toLowerCase()) !== -1 ||
    //         r.r_people.toLowerCase().indexOf(attribute.toLowerCase()) !== -1
    //     })
    //     res.render('TabRoomsClient/rooms', { layout: 'mainClient.hbs', rooms: multipleToObject(result) });
    // }
}

module.exports = new FeedbackController();