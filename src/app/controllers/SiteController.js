import UserModel from '../models/User.model.js';
import CourseModel from '../models/Cource.model.js';
import BlogModel from '../models/Blog.model.js';
import {
    multipleMongooseToObject,
    mongooseToObject,
} from '../../util/mongoose.js';
class SiteController {
    // [GET] /
    home(req, res) {
        //use promise
        CourseModel.find().then((courses) => {
            courses = multipleMongooseToObject(courses);
            res.render('home', { courses });
        });
    }
    // [GET] /search
    search(req, res) {
        console.log(req.body);
        res.render('search');
    }
    // [POST] /search
    update(req, res) {
        console.log(req.body);
        const new_user = new UserModel({
            name: req.body.name,
            email: req.body.email,
        });
        new_user.save((err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });

        res.send(`<h1>uppdate</h1>`);
    }
    // [GET] /login
    login(req, res, next) {
        res.render('login-register/login');
    }
}

export default new SiteController();
