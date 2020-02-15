const {Schema, model} = require('mongoose')

const MissaoSchema = new Schema({
    numero: {
        type: String,
        required: true,
    },
    etapa:{
        type: String,
    },
    trips:[{
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }],
    inicio: {
        type: String,
        required: true,
    },
    fim: {
        type: String,
        required: true,
    },
    localidade:{
        type: String,
        required: true,
    },
    diaria: {
        type: Number,
        required: true,
    },
})

module.exports = model('Missao',MissaoSchema)