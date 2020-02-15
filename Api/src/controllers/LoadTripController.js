const Trip = require('../models/Trip')

module.exports = { 

    async store(req, resp){

        try{
        
            const trips = req.body.trips;
            
            for (let i = 0; i < trips.length; i++) {

                const tripExists = await Trip.findOne({trigrama:trips[i].trigrama})

                if(tripExists){
                    await Trip.findByIdAndUpdate(tripExists._id,trips[i])
                }else{
                    const { 
                        antiguidade,
                        pst_grd,
                        nome, 
                        trigrama,
                        status,
                        dias,
                        funcao,
                        modulo
                    } = trips[i];

                    await Trip.create({
                        antiguidade,
                        pst_grd,
                        nome,
                        trigrama,
                        status,
                        dias,
                        funcao,
                        modulo
                    })
                }
            }
            return resp.json(`Lista de tripulantes cadastrada!`)
        
        }catch (error){

            console.log(error)
            return resp.status(400).send({err: 'Erro ao atualizar tripulantes'})

        }
    }

}