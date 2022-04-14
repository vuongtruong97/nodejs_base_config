import express from 'express';
import SiteController from '../app/controllers/SiteController.js';

const siteRouter = express.Router();

siteRouter.get('/login', SiteController.login);
siteRouter.get('/search', SiteController.search);
siteRouter.post('/search', SiteController.update);
siteRouter.get('/', SiteController.home);

export default siteRouter;
