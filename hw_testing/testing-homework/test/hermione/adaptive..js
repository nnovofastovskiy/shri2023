const { data } = require('./data');

async function adaptiveCheck(width, height, url) {
    return it(`на ${width}px`, async function ({ browser }) {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();

        await page.goto(url);
        await page.waitForSelector('.container');
        await browser.setTimeout({
            'pageLoad': 2000,
            // 'script': 60000
        });

        await browser.setWindowSize(width, height);
        // await browser.url(url);
        await browser.assertView(
            'plain', 'body',
            {
                screenshotDelay: 1000,
            }
        );
    });
}

describe('Адаптивность страницы Главная', async function () {
    await Promise.all(data.adaptive_sizes.map(({ width, height }) => (
        adaptiveCheck(width, height, data.pages.home)
    )));
});
describe('Адаптивность страницы Каталог', async function () {
    await Promise.all(data.adaptive_sizes.map(({ width, height }) => (
        adaptiveCheck(width, height, data.pages.catalog)
    )));
});
describe('Адаптивность страницы Доставка', async function () {
    await Promise.all(data.adaptive_sizes.map(({ width, height }) => (
        adaptiveCheck(width, height, data.pages.delivery)
    )));
});
describe('Адаптивность страницы Контакты', async function () {
    await Promise.all(data.adaptive_sizes.map(({ width, height }) => (
        adaptiveCheck(width, height, data.pages.contacts)
    )));
});
describe('Адаптивность страницы Корзина', async function () {
    await Promise.all(data.adaptive_sizes.map(({ width, height }) => (
        adaptiveCheck(width, height, data.pages.cart)
    )))
});

