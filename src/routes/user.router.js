import express from 'express';
import UserController from '../app/controllers/UserController.js';

const userRouter = express.Router();

userRouter.get('/stored/courses', UserController.storedCourses);

export default userRouter;
