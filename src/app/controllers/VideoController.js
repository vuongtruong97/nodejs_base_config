import VideoModel from '../models/Video.model.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

class VideoController {
    // [GET] /
    show(req, res, next) {
        console.log('run get videos');
        VideoModel.find()
            .then((videos) => multipleMongooseToObject(videos))
            .then((data) => res.render('videos/videos', { data }));
    }
    // [POST] /store
    async store(req, res, next) {
        const formVideoData = req.body;
        formVideoData.image_url = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const new_video = new VideoModel(formVideoData);
        await new_video.save();
        res.redirect('back');
    }
    // [GET] /:slug
    async detail(req, res, next) {
        const video = await VideoModel.findOne({
            slug: req.params.slug,
        }).lean();
        res.render('videos/detail', { video });
    }
    // [PUT] /:id
    async update(req, res, next) {
        await VideoModel.updateOne({ _id: req.params.id }, req.body);
        res.redirect('/user/stored/videos');
    }
    // [GET] /:id/edit
    async edit(req, res, next) {
        try {
            const video = await VideoModel.findById({
                _id: req.params.id,
            }).lean();
            res.render('videos/edit', { video });
        } catch (err) {
            next(err);
        }
    }
    // [DELETE] /:id
    async delete(req, res, next) {
        await VideoModel.delete({ _id: req.params.id });
        res.redirect('/user/stored/videos');
    }
    //[PATCH] /videos/:id/recycle
    async recycle(req, res, next) {
        const restoreTarget = await VideoModel.findOneDeleted({
            _id: req.params.id,
        });
        restoreTarget.restore();

        res.redirect('back');
    }
    //[DELETE] /videos/:id/wipe-data
    async wipeData(req, res, next) {
        await VideoModel.deleteOne({ _id: req.params.id });
        res.redirect('back');
    }
    // [PATCH] /videos/recycle-all
    async recycleAll(req, res, next) {
        console.log('recycle all');
        await VideoModel.restore({ deleted: 'true' });
        res.redirect('back');
    }
    //[POST] /videos/handle-form-action
    async handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                await VideoModel.delete({ _id: { $in: req.body.videoIds } });
                res.redirect('back');
                break;
            case 'recycle':
                await VideoModel.restore({ _id: { $in: req.body.videoIds } });
                res.redirect('back');
                break;
            case 'wipe':
                await VideoModel.deleteMany({
                    _id: { $in: req.body.videoIds },
                });
                res.redirect('back');
                break;
            default:
                res.redirect('back');
        }
    }
}

export default new VideoController();
