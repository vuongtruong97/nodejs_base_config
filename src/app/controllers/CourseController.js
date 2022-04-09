import CourseModel from '../models/Cource.model.js';
import {
    multipleMongooseToObject,
    mongooseToObject,
} from '../../util/mongoose.js';

class CourseController {
    // [GET] /
    async index(req, res, next) {
        const courses = multipleMongooseToObject(await CourseModel.find());
        res.render('courses/course', { courses });
    }
    //[GET] /:slug
    async detail(req, res, next) {
        try {
            const course = mongooseToObject(
                await CourseModel.findOne({ slug: req.params.slug }),
            );
            res.render('courses/detail', { course });
        } catch (err) {
            next(err);
        }
    }
    //[GET] /:id/edit
    async edit(req, res, next) {
        const course = mongooseToObject(
            await CourseModel.findById({
                _id: req.params.id,
            }),
        );
        res.render('courses/edit', { course });
        // res.json({ editCourse });
    }
    // [GET] /create
    async create(req, res, next) {
        try {
            const courses = await CourseModel.find().lean();

            res.render('courses/create', { courses });
        } catch (err) {
            next(err);
        }
    }
    // [POST] /courses/store
    async store(req, res, next) {
        const formData = req.body;

        //add image_url to formData width video Id
        formData.image_url = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`;

        const new_course = new CourseModel(formData);
        new_course.save();
        const courses = await CourseModel.find().lean();
        res.render('courses/create', { courses });
    }
}

export default new CourseController();
