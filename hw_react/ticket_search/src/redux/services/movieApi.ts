import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
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
export interface Cinema {
    id: string,
    movieIds: string[],
    name: string;
}

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getMovies: builder.query<Film[], null>({ query: () => 'movies' }),
        getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
        getCinemas: builder.query<Cinema[], null>({ query: () => 'cinemas' }),
        getMoviesInCinema: builder.query({ query: (cinemaId) => `movies?cinemaId=${cinemaId}` }),
    })
});

export const { useGetMoviesQuery, useGetCinemasQuery, useGetMovieQuery, useGetMoviesInCinemaQuery } = movieApi;