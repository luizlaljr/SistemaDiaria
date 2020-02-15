const Trip = require('../models/Trip')


module.exports = {
    async index(req, resp){
        const trips = await Trip.find({},'pst_grd nome trigrama status modulo dias funcao missoes').sort({antiguidade:"asc"})

        return resp.json(trips)
    },

    async show(req, resp){
        try {
            const {tripTrigrama} = req.params
        
            const tripSelecionado = await Trip.findOne({trigrama:tripTrigrama})

            if(tripSelecionado){
                const trips = []
                trips.push(tripSelecionado)
                return await resp.status(200).json(trips)
            }else{
                return await resp.status(200).json({messagem:"Tripulante não cadastrado!"})
            }
        } catch (error) {
            return resp.status(400).send({err: `Erro ao mostrar o tripulante ${tripId}`})
        }
    },
    
    async store(req, resp){
        const { 
            antiguidade,
            pst_grd,
            nome, 
            trigrama,
            status,
            modulo,
            funcao,
            dias,    
        } = req.body

        const trigramaExists = await Trip.findOne({trigrama:trigrama})

        if(trigramaExists){
            return resp.json(`O militar ${trigramaExists.pst_grd} ${trigramaExists.nome} já está cadastrado!`)
        }
        
        const trip = await Trip.create({
            antiguidade,
            pst_grd,
            nome,
            trigrama,
            status,
            modulo,
            funcao,
            dias
        })

        return resp.json(trip)
    },

    async update(req, resp){
        const {tripId} = req.params

        const dadosAlterados = req.body
       
        const tripUpdated = await Trip.findByIdAndUpdate(tripId,{$set:dadosAlterados})
        
        return resp.json(`O militar ${tripUpdated.pst_grd} ${tripUpdated.nome} teve seus dados alterados!`)
    },

    async remove(req, resp){
        const {tripId} = req.params

        const tripRemoved = await Trip.findByIdAndRemove(tripId)

        return resp.json(tripRemoved)
    }
         
}
