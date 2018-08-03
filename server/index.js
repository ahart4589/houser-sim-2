require('dotenv').config()

const express = require ('express')
const bodyParser = require ('body-parser')
const massive = require ('massive')
const app = express()

const controller = require ('./controller')

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Connected')
}).catch(err => {
    console.log('There was an error connecting to db:', err)
})


app.get('/api/houses', controller.getHouses)

app.listen(3029, () => {
    console.log('Listening on port 3029')
})