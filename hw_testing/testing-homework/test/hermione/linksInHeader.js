const { data } = require('./data');

describe('В шапке отображаются', async function () {
    it(`ссылки на страницы и корзину`, async function ({ browser }) {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();

        await page.goto(data.pages.home);
        await page.waitForSelector('.navbar');
        await browser.setTimeout({
            'pageLoad': 2000,
            // 'script': 60000
        });

        await browser.setWindowSize(1920, 6000);
        // await browser.url(url);
        await browser.assertView(
            'plain', '.navbar',
            {
                screenshotDelay: 1000,
            }
        );
    });
});