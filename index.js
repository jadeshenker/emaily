const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

/* dynamically figure out which port to listen to 
 * heroku's opportunity to pass us some runtime configuration 
 * have to wait until the last second to figure out what the port is 
 * look at underlying env and figure out what port to use 
 * variable will not be defined if we're in development environment 
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT);