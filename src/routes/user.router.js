import express from 'express';
import UserController from '../app/controllers/UserController.js';

const userRouter = express.Router();

userRouter.get('/recycle-bin/courses', UserController.recycleBinCourses);
userRouter.get('/recycle-bin/videos', UserController.recycleBinVideos);
userRouter.get('/stored/videos', UserController.storedVideos);
userRouter.get('/stored/courses', UserController.storedCourses);

export default userRouter;
