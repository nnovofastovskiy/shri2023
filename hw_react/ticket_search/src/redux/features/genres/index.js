import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const genresSlice = createSlice({
    name: 'genres',
    initialState: initialState,
    reducers: {
        set: (state, { payload }) => {
            state = payload;
        },
    }
});

export const genresReducer = genresSlice.reducer;
export const genresActions = genresSlice.actions;