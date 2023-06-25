import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { genresReducer } from "./features/genres";
import { filterReducer } from "./features/filter";
import { movieApi } from "./services/movieApi";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        genres: genresReducer,
        filter: filterReducer,
        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})