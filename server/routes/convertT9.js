var express = require('express');
var router = express.Router();
const { convertT9  } = require('../controllers/convertT9')


router.get('/', convertT9);

module.exports = router;
