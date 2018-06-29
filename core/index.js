const express = require('express');
const app = express();

yaml = require('js-yaml');
fs   = require('fs');
log = require('./log');
// SETUP LOGGING

// Get document, or throw exception on error
try {
  var doc = yaml.safeLoad(fs.readFileSync(__dirname+'/../config/test.yml', 'utf8'));
  log.info(doc);
} catch (e) {
  console.log(e);
}






app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);
