const express = require('express') //importacao do pacote
const app = express() //instanciando express
const cors = require('cors')
app.use(cors())
app.get('/', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.send('Este é o Backend') 
})
app.listen(8080) //execucao do servidor