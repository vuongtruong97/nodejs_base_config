import express from 'express';
import NewsController from '../app/controllers/NewsController.js';
const newsRouter = express.Router();
newsRouter.use((req, res, next) => {
    console.log('news run');
    next();
});
newsRouter.use('/:slug', NewsController.slug);
newsRouter.use('/', NewsController.index);
export default newsRouter;
