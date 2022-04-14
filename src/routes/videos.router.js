import express from 'express';
import VideoController from '../app/controllers/VideoController.js';

const videoRouter = express.Router();

videoRouter.patch('/:id/recycle', VideoController.recycle);
videoRouter.delete('/:id', VideoController.delete);
videoRouter.delete('/:id/wipe-data', VideoController.wipeData);
videoRouter.patch('/recycle-all', VideoController.recycleAll);
videoRouter.post('/store', VideoController.store);
videoRouter.post('/handle-form-action', VideoController.handleFormActions);
videoRouter.get('/:id/edit', VideoController.edit);
videoRouter.put('/:id', VideoController.update);
videoRouter.get('/:slug', VideoController.detail);
videoRouter.get('/', VideoController.show);

export default videoRouter;
