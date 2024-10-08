'use client';

import { FilmCard } from '@/components/FilmCard/FilmCard';
import styles from './page.module.css';
import { useGetMoviesInCinemaQuery, useGetMoviesQuery } from '@/redux/services/movieApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genresActions } from '@/redux/features/genres';
import { filmsActions } from '@/redux/features/films';
import { selectAllFilms, selectFilteredFilms } from '@/redux/features/films/selector';
import { selectFilterModule } from '@/redux/features/filter/selector';
import { TypeRootState } from '@/redux/store';

export default function Home() {
  const { data: films, isLoading, isError } = useGetMoviesQuery(null);
  const allFilms = useSelector((state: TypeRootState) => selectAllFilms(state));
  const filteredFilms = useSelector((state: TypeRootState) => selectFilteredFilms(state));
  const filmsToPage = filteredFilms ? filteredFilms : allFilms;
  const genres = Array.from(new Set(filmsToPage?.map(film => film.genre)).values()).map(g => ({ text: g }));
  const dispatch = useDispatch();

  const filter = useSelector((state: TypeRootState) => selectFilterModule(state));
  const { data: filmsInCinema } = useGetMoviesInCinemaQuery(filter.cinema.id);
  useEffect(() => {
    if (filmsInCinema) dispatch(filmsActions.setFilteredFilms(filmsInCinema));
    if (films) dispatch(filmsActions.setAllFilms(films));
    dispatch(genresActions.set(genres));
  }, [filmsToPage, filmsInCinema, dispatch]);

  return (
    <section className={styles.main}>
      {isLoading && <h2>Фильмы загружаюся...</h2>}
      {isError && <h2>Ошибка при загрузке</h2>}
      {filmsToPage && filmsToPage
        .filter(film => filter.genre.name ? film.genre === filter.genre.name : true)
        .filter(film => film.title.toLowerCase().includes(filter.title.toLowerCase()))
        .map(film => (
          <FilmCard
            className={styles['film-card']}
            key={film.id}
            filmId={film.id}
            title={film.title}
            genre={film.genre}
            imgSrc={film.posterUrl}
            filmHref={`/${film.id}`}
          />
        ))}
    </section>
  );
}

