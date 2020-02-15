const Missao = require('../models/Missao')
const Trip = require('../models/Trip')

module.exports = {

    async index(req, resp){

        try{
            const {tripId} = req.params
            
            tripSelecionado = await Trip.findById(tripId)
            
            const idMissoesTrip = tripSelecionado.missoes

            let missoes = []

            await Promise.all(idMissoesTrip.map( async idMissao =>  {
                
                const missao = await Missao.find({'_id':idMissao},'numero etapa inicio fim localidade diaria')
                missoes.push(missao[0])
            }))
            
            missoesOrdenadas = missoes.sort(function(a, b) {
                var dataseparada_a = a.inicio.split('/');
                var dataFormatada_a = dataseparada_a[2] + '-' + dataseparada_a[1] + '-' + dataseparada_a[0];
                
                var dataseparada_b = b.inicio.split('/');
                var dataFormatada_b = dataseparada_b[2] + '-' + dataseparada_b[1] + '-' + dataseparada_b[0];
                
                if (dataFormatada_a < dataFormatada_b) {
                    return 1;
                }
                if (dataFormatada_a > dataFormatada_b) {
                    return -1;
                }
                
                return 0;
                })

            return await resp.status(200).json(missoesOrdenadas)

        }catch(error){
            return resp.status(400).send({err: `Erro ao mostrar missoes do ${tripSelecionado.pst_grd} ${tripSelecionado.nome}`})
        }
    },

    async store(req, resp){
        try {
            const { 
                numero,
                etapa,
                inicio,
                fim,
                localidade,
                diaria,
                trips
            } = req.body;

            const missaoExists = await Missao.findOne({
                $and: [
                    {numero:numero},
                    {etapa:etapa},
                    {inicio:inicio}
                ]
            })

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
                
                return resp.status(200).send({sucess:'Atualizado com sucesso'})

            }else{
                
                const missaoNova = new Missao({
                    numero,
                    etapa,
                    inicio,
                    fim,
                    localidade,
                    diaria
                })
                console.log(trips)
                await Promise.all(trips.map(async trip => {
                    console.log(trip)
                    const existTrip = await Trip.findOne({trigrama:trip})
                    console.log(existTrip)
                    if (existTrip){
                        await missaoNova.trips.push(existTrip._id)
                        await existTrip.missoes.push(missaoNova._id)
                        await Trip.findByIdAndUpdate(existTrip._id, existTrip)
                    }
                }))
                
                missaoNova.save()
            
                await Missao.findByIdAndUpdate(missaoNova._id, missaoNova)
                
                return resp.json(missaoNova)

            }
        } catch (error) {
            return resp.status(400).send({err: 'Erro criando nova missao'})   
        }
    }   
}
