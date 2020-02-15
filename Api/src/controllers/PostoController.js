const Trip = require('../models/Trip')


module.exports = {
    async index(req, resp){
        try{
            resp.header('Access-Control-Allow-Origin', '*')
            resp.header('Access-Control-Allow-Credentials', true)
            resp.header('Access-Control-Allow-Methods', 'GET,OPTIONS')
            resp.header('Access-Control-Allow-Headers', 'Content-Type')
            const {posto} = req.params

            const trips = await Trip.find({pst_grd:posto},'trigrama nome').sort({nome:"asc"})

            return resp.json(trips)
        } catch (error) {
            return resp.status(400).send({err: 'Erro ao mostrar os tripulantes deste círculo hierarquico'})
        }
    },

    options(req,resp){
        try {
            resp.header('Access-Control-Allow-Origin', '*')
            resp.header('Access-Control-Allow-Credentials', true)
            resp.header('Access-Control-Allow-Methods', 'GET,OPTIONS')
            resp.header('Access-Control-Allow-Headers', 'Content-Type')
            return resp.status(400).send()
        }catch{
            return resp.status(400).send({err: 'Erro ao responder a requisição option'})
        }
    }        
}
