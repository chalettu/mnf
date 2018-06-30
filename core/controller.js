class Controller {
    get(req, res) {
        res.send('get called')
    }
    post(req, res) {
        res.send('post called')
    }
    put(req, res) {
        log.info('put called')
        res.send('put called')
    }
}
module.exports = Controller
