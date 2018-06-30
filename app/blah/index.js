const Controller = require('../../core/controller')
console.log('included blah')
class Blah extends Controller {
    constructor() {
        super()
    }
    get(req, res) {
        res.send('overriden get')
    }
}
module.exports = Blah
