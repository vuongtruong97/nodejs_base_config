class SiteController {
    // [GET] /
    home(req, res) {
        res.render('home');
    }
    // [GET] /contact
    contact(req, res) {
        res.render('contact');
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
