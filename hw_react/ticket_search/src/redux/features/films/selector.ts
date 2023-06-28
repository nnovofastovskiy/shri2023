import { TypeRootState } from "@/redux/store";

export const selectFilmsModule = (state: TypeRootState) => state.films;

export const selectAllFilms = (state: TypeRootState) => selectFilmsModule(state).allFilms;
export const selectFilteredFilms = (state: TypeRootState) => selectFilmsModule(state).filteredFilms;
