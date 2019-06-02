const mongoose= require('mongoose');
const partidoModel= require('../models/Partido');
const equipoModel = require('../models/Equipo')
const userModel = require('../models/User')
var partidoC={};

partidoC.getAll=(function(req, res){
    partidoModel.find({}, function(err, datos){
        if(err){
            res.status(500).json({status:500, err});
        }else{
            console.log('Data obtenidad con exito')
            res.status(200).json(datos);
        }
    })
})

partidoC.registrar=(function(req, res){
    var obj= new partidoModel({
        fecha: req.body.fecha,
        hora: req.body.hora,
        equipos:[ 
            new equipoModel({
                name:req.body.name1,
                puntaje:req.body.puntaje1,
                isWinner:req.body.isWinner1
            }), 
            new equipoModel({
                name:req.body.name2,
                puntaje:req.body.puntaje2,
                isWinner:req.body.isWinner2
            })
        ]
    });
    obj.save(function(err){
        if(err){
            res.status(500).json({status:500, err})
        }else{
            console.log('Se registro con exito');
            res.status(200).json(obj);
        }
    })

})

partidoC.deletear= (function(req, res){
    //console.log(req);
    var id= req.params.id;
    partidoModel.findByIdAndDelete(id, function(err, eliminado){
        if(err){
            res.status(500).json({msj:'No se pudo eliminar ', err, status:500});
        }else{
            res.status(200).json({status:200, eliminado});
        }
    })
});


module.exports=partidoC;