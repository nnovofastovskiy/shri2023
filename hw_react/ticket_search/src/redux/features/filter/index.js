import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    genre: '',
    cinema: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setTitle: (state, { payload }) => {
            state.title = payload;
        },
        setGenre: (state, { payload }) => {
            state.genre = payload;
        },
        setCinema: (state, { payload }) => {
            state.cinema = payload;
        },
    }
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;