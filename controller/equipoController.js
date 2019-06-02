const mongoose= require('mongoose');

const equipoModel= require('../models/Equipo');
var equipoC={};

equipoC.getAll=(function(req, res){
    equipoModel.find({}, function(err, datos){
        if(err){
            res.status(500).json({status:500, err});
        }else{
            console.log('Data obtenidad con exito')
            res.status(200).json(datos);
        }
    })
})

equipoC.registrar=(function(req, res){
    var obj= new equipoModel({
        name: req.body.name,
        puntaje: req.body.puntaje,
        isWinner: req.body.isWinner
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


equipoC.buscarporName= (function(req, res){
    console.log(req.params.name)
    equipoModel.find({name: req.params.name}, function(err, equipo){
        if(err || equipo==null){
            res.status(500).json({
                msj:'No fue encontrado el equipo',
                err,
                status:500
            })
        }else{
            res.status(200).json(equipo);
        }
    })
});

equipoC.deletear= (function(req, res){
    //console.log(req);
    var id= req.params.id;
    equipoModel.findByIdAndDelete(id, function(err, eliminado){
        if(err){
            res.status(500).json({msj:'No se pudo eliminar ', err, status:500});
        }else{
            res.status(200).json({status:200, eliminado});
        }
    })
});


module.exports=equipoC;

