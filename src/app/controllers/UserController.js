import CourseModel from '../models/Cource.model.js';
import VideoModel from '../models/Video.model.js';
import {
    multipleMongooseToObject,
    mongooseToObject,
} from '../../util/mongoose.js';

class UserController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        try {
            const courses = await CourseModel.find().sortable(res).lean();
            const deletedCoursesCount =
                await CourseModel.countDocumentsDeleted();
            res.render('user/stored-courses', { courses, deletedCoursesCount });
        } catch (err) {
            next(err);
        }
    }
    //[GET] //user/stored/videos
    async storedVideos(req, res, next) {
        try {
            const videos = await VideoModel.find().sortable(res).lean();
            const deletedVideos = await VideoModel.countDocumentsDeleted();
            res.render('user/stored-videos', { videos, deletedVideos });
        } catch (err) {
            next(err);
        }
    }
    //[GET] /user/recycle-bin-videos
    async recycleBinVideos(req, res, next) {
        try {
            const listDelete = await VideoModel.findDeleted()
                .sortable(res)
                .lean();
            res.render('user/recycle-bin-videos', { listDelete });
        } catch (err) {
            next(err);
        }
    }
    //[GET] /user/recyle-bin/courses
    async recycleBinCourses(req, res, next) {
        const deleteCourses = multipleMongooseToObject(
            await CourseModel.findDeleted().sortable(res)
        );

        res.render('user/recycle-bin-courses', { deleteCourses });
    }
}
export default new UserController();
