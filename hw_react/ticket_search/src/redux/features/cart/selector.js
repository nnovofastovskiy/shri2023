const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, id) => selectCartModule(state)[id] || 0;
export const selectAllAmount = (state) => {
    const allCart = selectCartModule(state);
    let res = 0
    for (const key in allCart) {
        res += allCart[key];
    }
    console.log(res);
    return res;
    console.log(allCart);
}