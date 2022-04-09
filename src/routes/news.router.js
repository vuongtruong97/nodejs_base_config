import express from 'express';
import NewsController from '../app/controllers/NewsController.js';
const newsRouter = express.Router();

//logger func
newsRouter.use((req, res, next) => {
    console.log('news run');
    next();
});
newsRouter.get('/courses', NewsController.courses);
newsRouter.get('/users', NewsController.users);
newsRouter.get('/', NewsController.index);
export default newsRouter;
