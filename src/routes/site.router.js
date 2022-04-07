import express from 'express';
import SiteController from '../app/controllers/SiteController.js';

const siteRouter = express.Router();

siteRouter.use((req, res, next) => {
    console.log('site run');
    next();
});

siteRouter.use('/search', SiteController.search);
siteRouter.use('/contact', SiteController.contact);
siteRouter.use('/', SiteController.home);

export default siteRouter;
