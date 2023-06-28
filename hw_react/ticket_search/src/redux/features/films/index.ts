import { createSlice } from "@reduxjs/toolkit";

export interface Film {
    title: string
    posterUrl: string
    releaseYear: number
    description: string
    genre: string
    id: string
    rating: number
    director: string
    reviewIds: string[]
}

interface FilmState {
    allFilms: Film[],
    filteredFilms: Film[]
}

const initialState: FilmState = {
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