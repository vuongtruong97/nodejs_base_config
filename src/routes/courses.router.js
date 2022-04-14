import express from 'express';
import CourseController from '../app/controllers/CourseController.js';

const coursesRouter = express.Router();

coursesRouter.patch('/:id/recycle', CourseController.recycle);
coursesRouter.post('/handle-form-actions', CourseController.handleFormActions);
coursesRouter.delete('/:id', CourseController.delete);
coursesRouter.put('/:id', CourseController.update);
coursesRouter.get('/:id/edit', CourseController.edit);
coursesRouter.post('/store', CourseController.store);
coursesRouter.get('/:slug', CourseController.detail);
coursesRouter.get('/', CourseController.index);

export default coursesRouter;
