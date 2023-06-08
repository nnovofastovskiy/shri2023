const express = require('express');
const { fetcher } = require('../fetcher.js');

const app = express();
const port = 3000;

const regLink = "<a.*?href=[\"\"'](?<url>.*?)[\"\"'].*?>(?<name>.*?)<\/a>";

app.use(express.json());
app.post('/parse', async (req, res) => {
    console.log(req.body.data);
    const rootUrl = req.body.data.domainName;
    let stack = [rootUrl];
    let result = {}
    while (stack.length > 0) {
        console.log('===================================stack: ', stack);
        const fetcherRes = await fetcher(stack.pop());
        console.log('fetcherRes: ', fetcherRes);
        const text = await fetcherRes.text();
        const parsedLinks = Array.from(text.matchAll(regLink)).map(link => link.groups.url);
        stack.push(...parsedLinks);
        console.log(parsedLinks);
    }
    res.sendStatus(200);
})

app.listen(port, (err) => {
    if (err) return console.log('some error');
    console.log(`server listening on ${port}`);
})