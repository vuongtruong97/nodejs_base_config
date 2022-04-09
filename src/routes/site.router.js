import express from 'express';
import SiteController from '../app/controllers/SiteController.js';

const siteRouter = express.Router();

siteRouter.use((req, res, next) => {
    console.log('site run');
    next();
});

siteRouter.get('/search', SiteController.search);
siteRouter.post('/search', SiteController.update);
siteRouter.get('/blog', SiteController.blog);
siteRouter.get('/', SiteController.home);

export default siteRouter;
