const { data } = require('./data');

describe('На ширине меньше 576px', async function () {
    it('навигационное меню должно скрываться за "гамбургер', async function ({ browser }) {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();

        await page.goto(data.pages.home);
        await page.waitForSelector('.navbar');
        await browser.setTimeout({
            'pageLoad': 2000,
            // 'script': 60000
        });

        await browser.setWindowSize(575, 6000);
        // await browser.url(url);
        await browser.assertView(
            'plain', '.navbar',
            {
                screenshotDelay: 1000,
            }
        );
    });
    it('при выборе элемента из меню "гамбургера", меню должно закрываться', async function ({ browser }) {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();

        await page.goto(data.pages.home);
        await page.waitForSelector('.navbar');
        await browser.setTimeout({
            'pageLoad': 2000,
            // 'script': 60000
        });

        await browser.setWindowSize(575, 6000);
        // await browser.url(url);
        // await browser.assertView(
        //     'plain', '.navbar',
        //     {
        //         screenshotDelay: 1000,
        //     }
        // );
        await page.waitForSelector('.Application-Toggler');
        await page.click('.Application-Toggler');
        await browser.assertView(
            'open', '.navbar',
            {
                screenshotDelay: 1000,
            }
        );
        await page.click('.nav-link[href="/hw/store/catalog"]');
        await browser.assertView(
            'close', '.navbar',
            {
                screenshotDelay: 1000,
            }
        );
    });

});