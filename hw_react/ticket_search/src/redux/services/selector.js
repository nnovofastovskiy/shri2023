export const selectMovieApiModule = (state) => state.movieApi;

export const selectCinemas = (state) => selectMovieApiModule(state).queries['getCinemas(null)'];