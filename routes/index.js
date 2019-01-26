var express = require('express');
var router = express.Router();
let {MainCtrl} = require('../controllers/mainController');
// route of main page
router.route('/')
      .get(MainCtrl.index);

module.exports = router;
