const express = require('express');
const app = express();
const config = require('./environment')
yaml = require('js-yaml');
fs   = require('fs');
// SETUP LOGGING
log = require('./log');


log.info(config.get('blah'))
// Get document, or throw exception on error

app.get('/', function(req, res){

  /**
   * class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}
   */
   res.send("Hello world!");
});

app.listen(3000);
