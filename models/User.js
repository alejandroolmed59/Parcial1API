var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String
    },
    contraseña: {
        type: String
    },
    partidos: [
        {
            fecha: String,
            hora: String,
            equipos: [
                {
                    name: String,
                    puntaje: String,
                    isWinner: Boolean
                }
            ]
        }
    ]
})
module.exports = mongoose.model('usuario', userSchema);