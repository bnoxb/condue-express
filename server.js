require('./db/db');
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const cors          = require('cors');
const session       = require('express-session');

app.use(session({
    secret: 'roberto roberto',
    resave: false,
    saveUninitialized: false
}));

// bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));

// set the cors options
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, // so the session cookie can be sent
    optionsSuccessStatus: 200
}
// tell the app to use it
app.use(cors(corsOptions));

// controllers set after middleware
const authController        = require('./controllers/authController');
const reservationController = require('./controllers/reservationController');
const menuController        = require('./controllers/menuController');

app.use('/auth', authController);
app.use('/api/v1/reservations', reservationController);
app.use('/api/v1/menu', menuController);

app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
});
