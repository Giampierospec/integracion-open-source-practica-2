const express = require('express');
const {ProcessJsonCtrl} = require('../../controllers/api/processJsonCtrl');
const multer = require('multer');
let upload = multer({storage: multer.memoryStorage()})
var router = express.Router();

router.route('/genJson')
      .post(ProcessJsonCtrl.generateJson);
router.route('/readJson')
        .post(upload.single('flJson'),ProcessJsonCtrl.readJson)

module.exports = router;