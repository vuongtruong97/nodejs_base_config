import express from 'express';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import route from './routes/index.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';

const app = express();

//define port
const port = dotenv.config().parsed.PORT || 1997;

//define dir folder path
const __dirname = dirname(fileURLToPath(import.meta.url));

//set static dirs
app.use(express.static(__dirname + '/public'));
// define body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//logger
// app.use(morgan("combined"));

//config view-engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: __dirname + '/resources/views/layouts',
        partialsDir: __dirname + '/resources/views/partials',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views/pages'));

//routes
route(app);

//listen port running
app.listen(port, (err) => {
    if (err) {
        const test = 'test';
        console.log(err);
    }
    console.log(`Server is running on http://localhost:${port}`);
});
