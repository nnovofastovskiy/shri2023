import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { genresReducer } from "./features/genres";
import { filterReducer } from "./features/filter";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        genres: genresReducer,
        filter: filterReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})