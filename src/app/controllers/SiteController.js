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
    // [GET] /blog
    async blog(req, res, next) {
        // use async await
        try {
            const blogs = await BlogModel.find().lean();
            res.render('blog', { blogs });
        } catch (err) {
            next(err);
        }
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
}

export default new SiteController();
