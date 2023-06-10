'use strict';

((global) => {
    const addTimeout = (fn) => {
        return () => {
            setTimeout(() => {
                fn();
            }, 100 * Math.random());
        };
    };

    const addRandomError = (fn, result) => {
        return () => {
            const isError = Math.random() <= 0.2;

            if (isError) {
                fn(new Error('Something went wrong'), null);
            } else {
                fn(null, result);
            }
        }
    }

    const getModifiedCallback = (fn, result) => {
        return addTimeout(addRandomError(fn, result));
    }

    class Entity {
        constructor(name, isActive) {
            this.getName = (callback) => {
                getModifiedCallback(callback, name)();
            };

            this.checkIsActive = (callback) => {
                getModifiedCallback(callback, isActive)();
            };
        }
    }

    class Category extends Entity {
        constructor(name, status, children) {
            super(name, status);

            this.getChildren = (callback) => {
                getModifiedCallback(callback, children)();
            };
        }
    }

    class Product extends Entity {
        constructor(name, status, price) {
            super(name, status);

            this.getPrice = (callback) => {
                getModifiedCallback(callback, price)();
            };
        }
    }

    global.Product = Product;
    global.Category = Category;
})(typeof window === 'undefined' ? global : window);

// решение задачи
async function solution({ minPrice, maxPrice, catalog }) {
    const start = console.time();
    let result = [];

    let catalogStack = [catalog];
    let productStack = [];

    while (catalogStack.length > 0) {
        await Promise.all(catalogStack.map(cat => getAllFromCatalog(cat))).then(res => {
            catalogStack = [];
            res.forEach(cat => {
                const isActive = cat[1];
                const children = cat[0];
                if (isActive) {
                    for (let i = children.length - 1; i >= 0; i--) {
                        const child = children[i];
                        if (child.hasOwnProperty('getChildren')) {
                            catalogStack.push(child);
                        } else {
                            productStack.push(child)
                        }
                    }
                }
            })
        })
        // const cat = await getAllFromCatalog(catalogStack.pop());
    }


    return await Promise.all(productStack.map(prod => getAllFromProduct(prod))).then(res => {
        console.timeEnd(start);
        return res
            .filter(prod => prod[0] && (prod[2] >= minPrice && prod[2] <= maxPrice))
            .sort((p1, p2) => {
                if (p1[2] == p2[2]) {
                    return p1[1].localeCompare(p2[1])
                }
                return p1[2] - p2[2]
            })
            .map(prod => {
                return { name: prod[1], price: prod[2] }
            });
    })
}

const getIsActive = function (item) {
    return new Promise((resolve, reject) => {
        item.checkIsActive((error, isActive) => {
            if (error) resolve(getIsActive(item));
            else resolve(isActive);
        })
    })
}

const getChildren = function (catalog) {
    return new Promise((resolve, reject) => {
        catalog.getChildren((error, children) => {
            if (error) resolve(getChildren(catalog));
            else resolve(children);
        });
    })
}

const getName = function (item) {
    return new Promise((resolve, reject) => {
        item.getName((error, name) => {
            if (error) resolve(getName(item));
            else resolve(name);
        })
    })
}

const getPrice = function (item) {
    return new Promise((resolve, reject) => {
        item.getPrice((error, price) => {
            if (error) resolve(getPrice(item));
            else resolve(price);
        })
    })
}

const getAllFromCatalog = async (catalog) => {
    return Promise.all([getChildren(catalog), getIsActive(catalog), getName(catalog)]).then(res => {
        return res;
    })
}

const getAllFromProduct = async (product) => {
    return Promise.all([getIsActive(product), getName(product), getPrice(product)]).then(res => {
        return res;
    })
}

module.exports = solution;

// проверка решения
const input = {
    minPrice: 300,
    maxPrice: 1500,
    catalog: new Category("Catalog", true, [
        new Category("Electronics", true, [
            new Category("Smartphones", true, [
                new Product("Smartphone 1", true, 1000),
                new Product("Smartphone 2", true, 900),
                new Product("Smartphone 3", false, 900),
                new Product("Smartphone 4", true, 900),
                new Product("Smartphone 5", true, 900)
            ]),
            new Category("Laptops", true, [
                new Product("Laptop 1", false, 1200),
                new Product("Laptop 2", true, 900),
                new Product("Laptop 3", true, 1500),
                new Product("Laptop 4", true, 1600)
            ]),
        ]),
        new Category("Books", true, [
            new Category("Fiction", false, [
                new Product("Fiction book 1", true, 350),
                new Product("Fiction book 2", false, 400)
            ]),
            new Category("Non-Fiction", true, [
                new Product("Non-Fiction book 1", true, 250),
                new Product("Non-Fiction book 2", true, 300),
                new Product("Non-Fiction book 3", true, 400)
            ]),
        ]),
    ])
}

const answer = [
    { name: "Non-Fiction book 2", price: 300 },
    { name: "Non-Fiction book 3", price: 400 },
    { name: "Laptop 2", price: 900 },
    { name: "Smartphone 2", price: 900 },
    { name: "Smartphone 4", price: 900 },
    { name: "Smartphone 5", price: 900 },
    { name: "Smartphone 1", price: 1000 },
    { name: "Laptop 3", price: 1500 }
];

solution(input).then(result => {
    const isAnswerCorrect = JSON.stringify(answer) === JSON.stringify(result);

    if (isAnswerCorrect) {
        console.log('OK');
    } else {
        console.log('WRONG');
    }
});