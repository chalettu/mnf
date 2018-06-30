var express = require('express');
var router = express.Router();

try { 
   // log.info('loading testing')
    var doc = yaml.safeLoad(fs.readFileSync(__dirname+'/../config/routes/testing.yml', 'utf8')); 
  //  log.info(doc); 
  } catch (e) { 
    console.log(e); 
  } 

//load the controller and add rest methods
const blahController = require ('../app/blah')
const blah = new blahController()
const restMethods = ['get','post','put', 'delete']
log.info(blah)
restMethods.forEach((method) => {
    //log.info(method)
    if (blah[method]){
        log.info(`looks like you have a ${method}`)
        router[method](doc.path, blah[method])
    }
})

module.exports = router;
