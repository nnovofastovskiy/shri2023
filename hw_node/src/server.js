const express = require('express');
const { fetcher } = require('../fetcher.js');

const app = express();
const port = 3000;

const regLink = "<a.*?href=[\"\"'](?<url>.*?)[\"\"'].*?>(?<name>.*?)<\/a>";

app.use(express.json());
app.post('/parse', async (req, res) => {
    const rootUrl = req.body.domainName;
    let stack = [rootUrl];
    let result = [];
    while (stack.length > 0) {
        const currentUrl = stack.pop();
        let fetcherRes = await fetcher(currentUrl);
        let status = fetcherRes.status;
        if (Math.floor(status / 100) == 5) {    // retry 1 time
            fetcherRes = await fetcher(currentUrl);
        }
        status = fetcherRes.status;
        if (Math.floor(status / 100) == 2) {

            const text = await fetcherRes.text();
            const parsedLinks = Array.from(text.matchAll(regLink)).map(link => link.groups.url);
            for (let i = parsedLinks.length - 1; i >= 0; i--) {
                if (!result.includes(parsedLinks[i])) {
                    stack.push(parsedLinks[i]);
                }
            }
            if (!result.includes(currentUrl)) {
                result.push(currentUrl);
            }
        }
    }
    res.status(200);
    res.send(result);
})

app.listen(port, (err) => {
    if (err) return console.log('some error');
    console.log(`server listening on ${port}`);
})