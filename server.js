'use strict';

const express = require('express')
const body_parser = require('body-parser')

const app = express()

app.use(body_parser.urlencoded({ extended: false })) //decodificar os dados enviados pelo usuario de uma forma que o js consiga manipular
app.use(body_parser.json())

const PORT = 8080;
const HOST = '0.0.0.0';


app.set('view engine', 'ejs') // setando ejs como view engine
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/ask', (req, res) => {
    res.render('ask')
})

app.post('/saveask', (req, res) => {
    let title = req.body.title
    let description = req.body.description

    console.log(description)
    res.send(`Formulário recebido!\n
                Título: ${title}\n
                Descrição: ${description}`)
})

app.listen(4000, error => {
    if (error) {
        console.log('Ocorreu um err')
    }
    else {
        console.log('Tudo certo')
    }
})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)