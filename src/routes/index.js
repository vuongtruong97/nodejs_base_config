import newsRouter from './news.router.js';
import siteRouter from './site.router.js';

function route(app) {
    app.use('/news', newsRouter);
               app.use('/', siteRouter);
}

export default route;
