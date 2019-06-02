const mongoose = require('mongoose');
const userModel = require('../models/User')
const partidoModel = require('../models/Partido')
const equipoModel = require('../models/Equipo')
var userC = {};

userC.getAll = (function (req, res) {
    userModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            console.log('Data obtenidad con exito')
            res.status(200).json(datos);
        }
    })
})

userC.registrar = (function (req, res) {
    var obj = new userModel({
        username: req.body.username,
        contraseña: req.body.contraseña,
        partidos: []
    });
    obj.save(function (err) {
        if (err) {
            res.status(500).json({ status: 500, err })
        } else {
            console.log('Se registro con exito');
            res.status(200).json(obj);
        }
    })

})

userC.anniadirPartido = (function (req, res) {
    var id = req.params.id;
    var obj = {
        fecha: req.body.fecha,
        hora: req.body.hora,
        equipos: [
            {
                name: req.body.nameEquipo1,
                puntaje:req.body.puntajeEquipo1,
                isWinner: req.body.isWinnerEquipo1
            },
            {
                name: req.body.nameEquipo2,
                puntaje:req.body.puntajeEquipo2,
                isWinner: req.body.isWinnerEquipo2
            }
        ]
    };
    userModel.findByIdAndUpdate(id,
        {
            $push: {
                partidos: obj
            }
        },
        { safe: true, upsert: true, new: true },
        function (err, model) {
            if (err) {
                res.status(500).json({ msj: 'No se pudo insertar ', err, status: 500 });
            } else {
                res.status(200).json({ status: 200, model });
            }
        }
    );
});

userC.anniadirPartidoPorUsername = (function (req, res) {
    var obj = {
        fecha: req.body.fecha,
        hora: req.body.hora,
        equipos: [
            {
                name: req.body.nameEquipo1,
                puntaje:req.body.puntajeEquipo1,
                isWinner: req.body.isWinnerEquipo1
            },
            {
                name: req.body.nameEquipo2,
                puntaje:req.body.puntajeEquipo2,
                isWinner: req.body.isWinnerEquipo2
            }
        ]
    };
    userModel.findOneAndUpdate(
        {username:req.params.username},
        {
            $push: {
                partidos: obj
            }
        },
        { safe: true, upsert: true, new: true },
        function (err, model) {
            if (err) {
                res.status(500).json({ msj: 'No se pudo insertar ', err, status: 500 });
            } else {
                res.status(200).json({ status: 200, model });
            }
        }
    );
});

userC.deletear = (function (req, res) {
    //console.log(req);
    var id = req.params.id;
    userModel.findByIdAndDelete(id, function (err, eliminado) {
        if (err) {
            res.status(500).json({ msj: 'No se pudo eliminar ', err, status: 500 });
        } else {
            res.status(200).json({ status: 200, eliminado });
        }
    })
});


module.exports = userC;