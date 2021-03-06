require('dotenv').config();

const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const express       = require('express');
const favicon       = require('serve-favicon');
const hbs           = require('hbs');
const mongoose      = require('mongoose');
const logger        = require('morgan');
const path          = require('path');
const session       = require('express-session');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcryptjs');
const cors          = require("cors");

const User          = require('./models/User')


mongoose
  .connect(`mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.wwhc4.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


//CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(cors({
  credentials: true,
  origin: ["http://localhost:3001"]
}));

app.use((req, res, next)=>{
  res.locals.user = req.user;
  next();
})

// Middleware de Session
app.use(session({ secret: 'ourPassword', resave: true, saveUninitialized: true }));

//Middleware para serializar al usuario
passport.serializeUser((user, callback) => {
	callback(null, user._id);
});

//Middleware para des-serializar al usuario
passport.deserializeUser((id, callback) => {
	User.findById(id).then((user) => callback(null, user)).catch((err) => callback(err));
});

//Middleware del Strategy
passport.use(
	new LocalStrategy({ passReqToCallback: true, usernameField: 'email' }, (req, email, password, next) => {
		User.findOne({ email })
			.then((user) => {
				if (!user) {
					return next(null, false, { message: 'Wrong email or password.' });
				}

				if (!bcrypt.compareSync(password, user.password)) {
					return next(null, false, { message: 'Wrong email or password.' });
				}

				return next(null, user);
			})
			.catch((err) => next(err));
	})
);

//Middleware de passport
app.use(passport.initialize());
app.use(passport.session());


// default value for title local
app.locals.title = 'PROYECTO FINAL';



const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth-routes');
app.use('/', authRoutes);

const user = require('./routes/user');
app.use('/', user); 

module.exports = app;
