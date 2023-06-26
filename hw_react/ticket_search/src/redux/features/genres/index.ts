import { createSlice } from "@reduxjs/toolkit";

interface IGenres {
    genres: {
        text: string
    }[]
}

const initialState: IGenres = {
    genres: []
};

const genresSlice = createSlice({
    name: 'genres',
    initialState: initialState,
    reducers: {
        set: (state, { payload }) => {
            state.genres = payload;
        },
    }
});

export const genresReducer = genresSlice.reducer;
export const genresActions = genresSlice.actions;