var express = require('express');
var router = express.Router();

try { 
    log.info('loading testing')
    var doc = yaml.safeLoad(fs.readFileSync(__dirname+'/../config/routes/testing.yml', 'utf8')); 
    log.info(doc); 
  } catch (e) { 
    console.log(e); 
  } 


router.get(doc.path, (req, res) =>{ res.send('working')});

module.exports = router;
