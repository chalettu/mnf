const express = require('express');
const app = express();
const config = require('./environment')
yaml = require('js-yaml');
fs   = require('fs');
// SETUP LOGGING
log = require('./log');
require ('./passport')
const auth = require('./pages/auth');

// const router = require('./routes')
const routes = require('./routes')
log.info(config.get('blah'))
// Get document, or throw exception on error

app.get('/', function(req, res){
   res.send("Hello world!");
});
app.use('/', routes);
 app.use('/auth', auth);
app.listen(3000);
