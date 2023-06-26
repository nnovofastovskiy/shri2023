import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allFilms: [],
    filteredFilms: []
};

const filmsSlice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        setAllFilms: (state, { payload }) => {
            state.allFilms = payload;
        },
        setFilteredFilms: (state, { payload }) => {
            state.filteredFilms = payload;
        },
    }
});

export const filmsReducer = filmsSlice.reducer;
export const filmsActions = filmsSlice.actions;