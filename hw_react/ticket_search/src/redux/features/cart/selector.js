export const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, id) => selectCartModule(state)[id] || 0;

export const selectProductsInCart = (state) => {
    const allCart = selectCartModule(state);
    let res = [];
    for (const key in allCart) {
        res.push(key);
    }
    // console.log('from selector', res);
    return res;
}

export const selectAllAmount = (state) => {
    const allCart = selectCartModule(state);
    let res = 0
    for (const key in allCart) {
        res += allCart[key];
    }
    return res;
}