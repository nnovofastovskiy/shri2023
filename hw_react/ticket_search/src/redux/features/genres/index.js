import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genres: []
};

const genresSlice = createSlice({
    name: 'genres',
    initialState: initialState,
    reducers: {
        set: (state, { payload }) => {
            // console.log('genres set', payload);
            state.genres = payload;
        },
    }
});

export const genresReducer = genresSlice.reducer;
export const genresActions = genresSlice.actions;