const { data } = require('./data');

async function adaptiveCheck(width, height, url) {
    return it(`на ${width}px`, async function ({ browser }) {
        const puppeteer = await browser.getPuppeteer();
        const [page] = await puppeteer.pages();

        const mock = await browser.mock('http://localhost:3000/hw/store/api/products', {
            method: 'get'
        })

        mock.respond([
            {
                "id": 0,
                "name": "Ergonomic Chicken",
                "price": 248
            },
            {
                "id": 1,
                "name": "Intelligent Gloves",
                "price": 686
            },
            {
                "id": 2,
                "name": "Rustic Chicken",
                "price": 886
            },
            {
                "id": 3,
                "name": "Sleek Fish",
                "price": 638
            },
            {
                "id": 4,
                "name": "Small Bike",
                "price": 227
            },
            {
                "id": 5,
                "name": "Sleek Chair",
                "price": 836
            },
            {
                "id": 6,
                "name": "Generic Towels",
                "price": 595
            },
            {
                "id": 7,
                "name": "Refined Mouse",
                "price": 42
            },
            {
                "id": 8,
                "name": "Awesome Sausages",
                "price": 6
            },
            {
                "id": 9,
                "name": "Gorgeous Chicken",
                "price": 779
            },
            {
                "id": 10,
                "name": "Sleek Chips",
                "price": 807
            },
            {
                "id": 11,
                "name": "Unbranded Tuna",
                "price": 17
            },
            {
                "id": 12,
                "name": "Ergonomic Shirt",
                "price": 661
            },
            {
                "id": 13,
                "name": "Intelligent Mouse",
                "price": 208
            },
            {
                "id": 14,
                "name": "Licensed Ball",
                "price": 675
            },
            {
                "id": 15,
                "name": "Fantastic Tuna",
                "price": 420
            },
            {
                "id": 16,
                "name": "Licensed Soap",
                "price": 856
            },
            {
                "id": 17,
                "name": "Rustic Gloves",
                "price": 16
            },
            {
                "id": 18,
                "name": "Licensed Gloves",
                "price": 40
            },
            {
                "id": 19,
                "name": "Practical Shoes",
                "price": 858
            },
            {
                "id": 20,
                "name": "Awesome Bike",
                "price": 944
            },
            {
                "id": 21,
                "name": "Generic Cheese",
                "price": 499
            },
            {
                "id": 22,
                "name": "Unbranded Hat",
                "price": 941
            },
            {
                "id": 23,
                "name": "Handmade Fish",
                "price": 766
            },
            {
                "id": 24,
                "name": "Fantastic Car",
                "price": 13
            },
            {
                "id": 25,
                "name": "Tasty Soap",
                "price": 364
            },
            {
                "id": 26,
                "name": "Handcrafted Shoes",
                "price": 704
            }
        ], {
            statusCode: 200,
            fetchResponse: true // default
        })

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
                // ignoreElements: [
                //     '.ProductItem-Name',
                //     '.ProductItem-Price'
                // ]
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

