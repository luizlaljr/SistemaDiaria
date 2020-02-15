const Missao = require('../models/Missao')
const Trip = require('../models/Trip')

let missaoErro = ''

module.exports = { 
    
    async store(req, resp){
    
        try {

            const missoes = req.body.missoes;
            
            for (let i = 0; i < missoes.length; i++) {

                missaoErro = missoes[i].numero

                const missaoExists = await Missao.findOne({
                    $and: [
                        {numero:missoes[i].numero},
                        {etapa:missoes[i].etapa}
                    ]
                })
                
                const { 
                    numero,
                    etapa,
                    inicio,
                    fim,
                    localidade,
                    diaria,
                    trips
                } = missoes[i];

                if(missaoExists){ 
                    
                    await Promise.all(trips.map( async trip => {

                        const tripLancado = await Trip.findOne({trigrama:trip})
                        const existTripLancado = missaoExists.trips.indexOf(tripLancado._id)

                        if(existTripLancado === -1){
                            await missaoExists.trips.push(tripLancado._id)
                            await tripLancado.missoes.push(missaoExists._id)
                            await Trip.findByIdAndUpdate(tripLancado._id, tripLancado)
                        }
                    }))
                        
                    await Promise.all(missaoExists.trips.map( async trip => {
                        
                        const tripLancado = await Trip.findById(trip)
                        const existTripLancado = trips.indexOf(tripLancado.trigrama)
                        
                        if(existTripLancado === -1){
                            
                            await missaoExists.trips.pop(tripLancado._id)
                            await tripLancado.missoes.pop(missaoExists._id)
                            await Trip.findByIdAndUpdate(tripLancado._id, tripLancado)
                            
                        }
                    }))       

                    await Missao.findByIdAndUpdate(missaoExists._id,missaoExists)

                }else{
            
                    const missaoCriada = new Missao({
                        numero,
                        etapa,
                        inicio,
                        fim,
                        localidade,
                        diaria
                    })

                    await Promise.all(trips.map(async trip => {
                        
                        const existTrip = await Trip.findOne({trigrama:trip})
                        
                        if (existTrip){
                            await missaoCriada.trips.push(existTrip._id)
                            await existTrip.missoes.push(missaoCriada._id)
                            await Trip.findByIdAndUpdate(existTrip._id, existTrip)
                        }

                    }))
                
                    await missaoCriada.save()

                }

            }

            return resp.status(200).send({sucess:'Atualizada lista de missoes'})

        } catch (error) {
        
             return resp.status(400).send({err: `Erro atualizando missoes na missao ${missaoErro}`})
        
        }
    },

}