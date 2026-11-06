const express = require('express')
const app = express()
const port = 8080
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send('Envie os parâmetros n1 e n2 para a rota /soma')
})

app.get('/soma', (req, res) => {
    console.log("n1 = " + req.query.n1)
    console.log("n2 = " + req.query.n2)
    result = parseFloat(req.query.n1) + parseFloat(req.query.n2)
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${req.query.n1} + ${req.query.n2} = ${result}`
    }

    res.send({ conta: result })
})

app.get('/subtracao', (req, res) => {
    console.log("n1 = " + req.query.n1)
    console.log("n2 = " + req.query.n2)
    result = parseFloat(req.query.n1) - parseFloat(req.query.n2)
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${req.query.n1} - ${req.query.n2} = ${result}`
    }

    res.send({ conta: result })
})

app.get('/multiplicacao', (req, res) => {
    console.log("n1 = " + req.query.n1)
    console.log("n2 = " + req.query.n2)
    result = parseFloat(req.query.n1) * parseFloat(req.query.n2)
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${req.query.n1} * ${req.query.n2} = ${result}`
    }

    res.send({ conta: result })
})

app.get('/divisao', (req, res) => {
    console.log("n1 = " + req.query.n1)
    console.log("n2 = " + req.query.n2)
    result = parseFloat(req.query.n1) / parseFloat(req.query.n2)
    if (isNaN(result) || req.query.n2 == 0) {
        result = "Valores inválidos."
    } else {
        result = `${req.query.n1} / ${req.query.n2} = ${result}`
    }

    res.send({ conta: result })
})

app.listen(port, () => console.log(`O servidor está rodando em: http://localhost:${port}`))