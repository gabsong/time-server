const Router = require('@koa/router');
const timeController = require('./timeController');
const router = new Router();

// wall-clock time endpoint
router.get('/time', ctx => timeController.getServerTimeInTimezone(ctx));

module.exports = router.routes();
