const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const server = express()

mongoose.connect('mongodb+srv://admin:admin@clusterdiaria-zc1od.mongodb.net/tripulantes?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useFindAndModify: false,
})

server.use(express.json())
server.use(routes)

var bodyParser = require('body-parser');
server.use(bodyParser.json()); // support json encoded bodies
server.use(bodyParser.urlencoded({ extended: true }));

// PORT // based on express-generator
function normalizePort(val) {
    const port = parseInt(val, 10)
  
    if (isNaN(port)) {
      return val
    }
  
    if (port >= 0) {
      return port
    }
  
    return false
  }
  
  const port = normalizePort(process.env.PORT || 3333);
  server.set('port', port);
  
  server.listen(port)