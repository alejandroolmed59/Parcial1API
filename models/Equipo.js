var mongoose= require('mongoose');
var Schema = mongoose.Schema;


const equipoSchema= new Schema({
    name:{
        type: String
    },
    puntaje:{
        type: String
    },
    isWinner:{
        type: Boolean
    }
})
module.exports= mongoose.model('equipo',equipoSchema);
