import siteRouter from './site.router.js';
import coursesRouter from './courses.router.js';
import videoRouter from './videos.router.js';
import userRouter from './user.router.js';

function route(app) {
    app.use('/user', userRouter);
    app.use('/videos', videoRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

export default route;
