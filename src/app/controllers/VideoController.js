import VideoModel from '../models/Video.model.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

class VideoController {
    // [GET] /
    show(req, res, next) {
        VideoModel.find()
            .then((videos) => multipleMongooseToObject(videos))
            .then((data) => res.render('videos/videos', { data }));
    }
    // [GET] /create
    create(req, res, next) {
        res.render('videos/create');
    }
    // [POST] /store
    async store(req, res, next) {
        const formVideoData = req.body;
        formVideoData.image_url = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const new_video = new VideoModel(formVideoData);
        await new_video.save();
        res.redirect('/videos');
    }
    // [GET] /:slug
    async detail(req, res, next) {
        const video = await VideoModel.findOne({
            slug: req.params.slug,
        }).lean();
        res.render('videos/detail', { video });
    }
}

export default new VideoController();
