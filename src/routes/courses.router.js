import express from 'express';
import CourseController from '../app/controllers/CourseController.js';

const coursesRouter = express.Router();
coursesRouter.get('/:id/edit', CourseController.edit);
coursesRouter.get('/create', CourseController.create);
coursesRouter.post('/store', CourseController.store);
coursesRouter.get('/:slug', CourseController.detail);
coursesRouter.get('/', CourseController.index);

export default coursesRouter;
