var express = require('express');
var router = express.Router();
let {MainCtrl} = require('../controllers/mainController');
// route of main page
router.route('/')
      .get(MainCtrl.index);
router.route('/downloadFile')
      .get(MainCtrl.renderDownloadFile);
router.route('/readFile')
      .get(MainCtrl.readFile)

module.exports = router;
