async function solution({ minPrice, maxPrice, catalog }) {
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