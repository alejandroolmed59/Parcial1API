var mongoose= require('mongoose');
var Schema = mongoose.Schema;


const partidoSchema= new Schema({
    fecha: String,
    hora:String,
    equipos:[ 
        {type: Schema.Types.ObjectId, ref:'equipo'}
    ]
})
module.exports= mongoose.model('partido',partidoSchema);