import express from 'express';
import * as curlConverter from "curlconverter";
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('F*cking Lemon Curl')
})

app.get('/api/java', (req, res) => {

    try {
        let response = curlConverter.toJava(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/go', (req, res) => {

    try {
        let response = curlConverter.toGo(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/python', (req, res) => {

    try {
        let response = curlConverter.toPython(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/csharp', (req, res) => {

    try {
        let response = curlConverter.toCSharp(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.listen(port, () => {
    console.log(`Lemon-curl app listening on port ${port}`)
})