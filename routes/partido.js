var express = require('express');
var router = express.Router();
var partidoC= require('../controller/partidoController');

/* GET users listing. */
router.get('/', partidoC.getAll);

router.post('/:id', partidoC.registrar);

router.delete('/:id', partidoC.deletear);

module.exports = router;
