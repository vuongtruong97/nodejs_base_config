import mongoose from 'mongoose';
import CourseModel from '../models/Cource.model.js';
import UserModel from '../models/User.model.js';

class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /courses
    async courses(req, res, next) {
        try {
            res.json(await CourseModel.find());
        } catch (err) {
            next(err);
        }
    }
    async users(req, res, next) {
        try {
            res.json(await UserModel.find());
        } catch (err) {
            next(err);
        }
    }
}
export default new NewsController();
