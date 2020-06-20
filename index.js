const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({bye: 'friend'});
});

/* dynamically figure out which port to listen to 
 * heroku's opportunity to pass us some runtime configuration 
 * have to wait until the last second to figure out what the port is 
 * look at underlying env and figure out what port to use 
 * variable will not be defined if we're in development environment 
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT);