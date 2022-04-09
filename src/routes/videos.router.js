import express from 'express';
import VideoController from '../app/controllers/VideoController.js';

const videoRouter = express.Router();

videoRouter.get('/create', VideoController.create);
videoRouter.post('/store', VideoController.store);
videoRouter.get('/:slug', VideoController.detail);
videoRouter.get('/', VideoController.show);

export default videoRouter;
