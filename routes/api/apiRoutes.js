const express = require('express');
const {ProcessJsonCtrl} = require('../../controllers/api/processJsonCtrl');
var router = express.Router();

router.route('/genJson')
      .post(ProcessJsonCtrl.generateJson);

module.exports = router;