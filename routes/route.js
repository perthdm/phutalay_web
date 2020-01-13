const router = require('express').Router();
const Controller = require('../controllers/controller');

router.route('').get(Controller.index);


module.exports = router;