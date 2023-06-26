import { createSlice } from "@reduxjs/toolkit";

interface IFilter {
    title: string,
    genre: string,
    cinema: string
}

const initialState: IFilter = {
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