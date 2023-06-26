export const selectFilmsModule = (state) => state.films;

export const selectAllFilms = (state) => selectFilmsModule(state).allFilms;
export const selectFilteredFilms = (state) => selectFilmsModule(state).filteredFilms;
