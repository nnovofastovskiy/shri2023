const data = {
    url: 'http://localhost:3000/hw/store/',
    pages: {
        home: 'http://localhost:3000/hw/store/',
        catalog: 'http://localhost:3000/hw/store/catalog',
        delivery: 'http://localhost:3000/hw/store/delivery',
        contacts: 'http://localhost:3000/hw/store/contacts',
        cart: 'http://localhost:3000/hw/store/cart',
    },
    adaptive_sizes: [
        { width: 1920, height: 6000 },
        { width: 1440, height: 6000 },
        { width: 768, height: 6000 },
        { width: 576, height: 6000 },
        { width: 320, height: 6000 },
    ]
}

module.exports = { data };