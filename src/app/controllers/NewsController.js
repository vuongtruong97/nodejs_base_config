class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /:slug
    slug(req, res) {
        res.send(`slug`);
    }
}
export default new NewsController();
