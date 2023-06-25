export const selectFilterModule = (state) => state.filter;

export const selectTitle = (state) => selectFilterModule(state).title;
export const selectGenre = (state) => selectFilterModule(state).genre;
export const selectCinema = (state) => selectFilterModule(state).cinema;
