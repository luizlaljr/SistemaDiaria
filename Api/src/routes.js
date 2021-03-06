const express = require('express')
const TripController = require('./controllers/TripController')
const MissaoController = require('./controllers/MissaoController')
const LoadTripController = require("./controllers/LoadTripController")
const LoadMissaoController = require("./controllers/LoadMissaoController")
const PostoController = require("./controllers/PostoController")
const FuncaoController = require("./controllers/FuncaoController")

const routes = express.Router()

routes.get('/trip', TripController.index)
routes.get('/trip/:tripTrigrama', TripController.show)
routes.post('/trip', TripController.store)
routes.put('/trip/:tripId', TripController.update)
routes.delete('/trip/:tripId', TripController.remove)
routes.post('/load/trips', LoadTripController.store)
routes.post('/load/missoes', LoadMissaoController.store)
routes.get('/missao/:tripId', MissaoController.index)
routes.post('/missao', MissaoController.store)
routes.get('/posto/:posto', PostoController.index)
routes.options('/posto/:posto', PostoController.options)
routes.get('/funcao/:funcao', FuncaoController.index)
routes.options('/funcao/:funcao', FuncaoController.options)

module.exports = routes