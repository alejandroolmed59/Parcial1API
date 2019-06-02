var express = require('express');
var router = express.Router();
var equipoC= require('../controller/equipoController');

router.get('/', equipoC.getAll);

router.post('/', equipoC.registrar);

router.delete('/:id', equipoC.deletear);

module.exports = router;
