import CourseModel from '../models/Cource.model.js';

class UserController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        try {
            const courses = await CourseModel.find().lean();
            res.render('user/stored-courses', { courses });
        } catch (err) {
            next(err);
        }
    }
}
export default new UserController();
