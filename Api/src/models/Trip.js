const {Schema, model} = require('mongoose')

const TripSchema = new Schema({
    antiguidade: {
        type: Number,
        required: true,
    },
    pst_grd: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    trigrama:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    modulo: {
        type: String,
        required: true,
    },
    dias: {
        type: Number,
        required: true,
    },
    funcao: {
        type: String,
        required: true,
    },
    missoes: [{
        type: Schema.Types.ObjectId,
        ref: 'Missao'
    }]
})

module.exports = model('Trip',TripSchema)