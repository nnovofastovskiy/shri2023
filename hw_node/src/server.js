const express = require('express');
const http = require('node:http')
const https = require('node:https')

const app = express();
const port = 3000;

function fetch(url) {
    return new Promise((resolve, reject) => {
        let req = https.get(url, (res) => {

        })
        req.on('error', err => reject('failed on the request' + err.message));
    })
}

app.use(express.json());       // to support JSON-encoded bodies
app.post('/parse', (req, res) => {
    console.log(req.body.data);
    const rootUrl = req.body.data.domainName

    https.get(rootUrl, (res) => {
        console.log(res.headers);
    })
    res.send('OK')
})

app.listen(port, (err) => {
    if (err) return console.log('some error');
    console.log(`server listening on ${port}`);
})