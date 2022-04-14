import CourseModel from '../models/Cource.model.js';
import {
    multipleMongooseToObject,
    mongooseToObject,
} from '../../util/mongoose.js';

class CourseController {
    // [GET] /
    async index(req, res, next) {
        let coursesQuery = CourseModel.find();
        const courses = multipleMongooseToObject(await coursesQuery);
        res.render('courses/course', { courses });
    }
    //[GET] /:slug
    async detail(req, res, next) {
        try {
            const course = mongooseToObject(
                await CourseModel.findOne({ slug: req.params.slug })
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
            })
        );
        res.render('courses/edit', { course });
        // res.json({ editCourse });
    }
    // [PUT] /courses/:id
    async update(req, res, next) {
        req.body.image_url = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`;
        await CourseModel.updateOne({ _id: req.params.id }, req.body);
        res.redirect('/user/stored/courses');
    }
    // [POST] /courses/store
    async store(req, res, next) {
        //add image_url to formData width video Id
        req.body.image_url = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`;
        const new_course = new CourseModel(req.body);
        await new_course.save();
        res.redirect('back');
    }
    // [DELETE] /
    async delete(req, res, next) {
        try {
            await CourseModel.delete({ _id: req.params.id });
            res.redirect('back');
        } catch (err) {
            const message = err;
            res.render('error', { message });
        }
    }
    // [POST] /courses/handle-form-actions
    async handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'recycle':
                await CourseModel.restore({ _id: { $in: req.body.courseIds } });
                res.redirect('back');
                break;
            case 'delete':
                await CourseModel.delete({ _id: { $in: req.body.courseIds } });
                res.redirect('back');
                break;
            case 'wipe':
                await CourseModel.deleteMany({
                    _id: { $in: req.body.courseIds },
                });
                res.redirect('back');
                break;
            default:
                console.log('no change');
                res.redirect('back');
        }
    }
    // [PATCH] /courses/:id/recycle
    async recycle(req, res, next) {
        await CourseModel.restore({ _id: req.params.id });
        res.redirect('back');
    }

    // [POST] /courses/??
}

export default new CourseController();
