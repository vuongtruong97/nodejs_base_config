import express from 'express';
import dotenv from 'dotenv'; // config ENV
import { engine } from 'express-handlebars'; // view engine
import route from './routes/index.js'; // router
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan'; // logger request middle ware
import connectDb from './config/database/index.js';
import methodOverride from 'method-override'; // override http method
import sortMiddleware from './app/middlewares/sortMiddleware.js';
import handlebarHelper from './helper/handlebars.js';

const app = express();

//define port
const port = dotenv.config().parsed.PORT || 1997;

//connect to db
connectDb();

//define dir folder path
const __dirname = dirname(fileURLToPath(import.meta.url));

//set static dirs
app.use(express.static(path.join(__dirname, 'public')));

// define body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//logger middleware
app.use(morgan('combined'));

//method overite
// overrite POST to PUT

app.use(methodOverride('_method'));

//custom middlewares
app.use(sortMiddleware);

//config view-engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'main',
        helpers: handlebarHelper,
        layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'resources', 'views', 'partials'),
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views/pages'));

//routes
route(app);

//listen port running
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server is running on http://localhost:${port}`);
});
