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

app.get('/api/dart', (req, res) => {
    try {
        let response = curlConverter.toDart(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/php', (req, res) => {
    try {
        let response = curlConverter.toPhp(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/phpGuzzle', (req, res) => {
    try {
        let response = curlConverter.toPhpGuzzle(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/ansible', (req, res) => {
    try {
        let response = curlConverter.toAnsible(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/coldFusion', (req, res) => {
    try {
        let response = curlConverter.toCFML(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/clojure', (req, res) => {
    try {
        let response = curlConverter.toClojure(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/elixir', (req, res) => {
    try {
        let response = curlConverter.toElixir(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/javaScript', (req, res) => {
    try {
        let response = curlConverter.toJavaScript(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/javaScript-Jquery', (req, res) => {
    try {
        let response = curlConverter.toJavaScriptJquery(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/javaScript-XHR', (req, res) => {
    try {
        let response = curlConverter.toJavaScriptXHR(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/jsonString', (req, res) => {
    try {
        let response = curlConverter.toJsonString(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/julia', (req, res) => {
    try {
        let response = curlConverter.toJulia(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/kotlin', (req, res) => {
    try {
        let response = curlConverter.toKotlin(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/lua', (req, res) => {
    try {
        let response = curlConverter.toLua(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/matlab', (req, res) => {
    try {
        let response = curlConverter.toMATLAB(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/node', (req, res) => {
    try {
        let response = curlConverter.toNode(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/node-axios', (req, res) => {
    try {
        let response = curlConverter.toNodeAxios(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/node-got', (req, res) => {
    try {
        let response = curlConverter.toNodeGot(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/node-http', (req, res) => {
    try {
        let response = curlConverter.toNodeHttp(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/node-ky', (req, res) => {
    try {
        let response = curlConverter.toNodeKy(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/node-request', (req, res) => {
    try {
        let response = curlConverter.toNodeRequest(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/node-superagent', (req, res) => {
    try {
        let response = curlConverter.toNodeSuperAgent(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/objective-c', (req, res) => {
    try {
        let response = curlConverter.toObjectiveC(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/ocaml', (req, res) => {
    try {
        let response = curlConverter.toOCaml(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/perl', (req, res) => {
    try {
        let response = curlConverter.toPerl(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/r', (req, res) => {
    try {
        let response = curlConverter.toR(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/ruby', (req, res) => {
    try {
        let response = curlConverter.toRuby(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/rust', (req, res) => {
    try {
        let response = curlConverter.toRust(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/swift', (req, res) => {
    try {
        let response = curlConverter.toSwift(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/api/wget', (req, res) => {
    try {
        let response = curlConverter.toWget(req.body.curl);
        res.send(response);
    }catch (e) {
        res.status(400).send(e.message);
    }
})

app.listen(port, () => {
    console.log(`Lemon-curl app listening on port ${port}`)
})