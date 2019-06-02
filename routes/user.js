var express = require('express');
var router = express.Router();
var userC= require('../controller/userController');

router.get('/', userC.getAll);

router.post('/', userC.registrar);

router.post('/:id', userC.anniadirPartido);

router.post('/anniadirPartido/:username', userC.anniadirPartidoPorUsername);

router.delete('/:id', userC.deletear);

module.exports = router;
