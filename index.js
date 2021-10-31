const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app)
const port = 3000

app.get('/', (req,res) => res.send('Olá mundo com Express!'))
app.listen(port, () =>  console.log('APP rodando na porta 3000'))