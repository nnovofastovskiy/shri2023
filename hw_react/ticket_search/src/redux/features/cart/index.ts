import { createSlice } from "@reduxjs/toolkit";

interface ICart {
    [key: string]: number
}

const initialState: ICart = {};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        increment: (state, { payload }) => {
            const count = state[payload] || 0;
            state[payload] = count + 1;
        },
        decrement: (state, { payload }) => {
            const count = state[payload];
            if (!count) return;
            if (count === 1) {
                delete state[payload];
                return;
            }
            state[payload] = count - 1;
        },
        remove: (state, { payload }) => {
            delete state[payload];
        },
        reset: () => initialState,
    }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;