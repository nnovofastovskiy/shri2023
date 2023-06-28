import { TypeRootState } from "@/redux/store";

export const selectCartModule = (state: TypeRootState) => state.cart;

export const selectProductAmount = (state: TypeRootState, id: string) => selectCartModule(state)[id] || 0;

export const selectProductsInCart = (state: TypeRootState) => {
    const allCart = selectCartModule(state);
    let res = [];
    for (const key in allCart) {
        res.push(key);
    }
    // console.log('from selector', res);
    return res;
}

export const selectAllAmount = (state: TypeRootState) => {
    const allCart = selectCartModule(state);
    let res = 0
    for (const key in allCart) {
        res += allCart[key];
    }
    return res;
}