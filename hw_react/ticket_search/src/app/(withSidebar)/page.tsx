'use client';

import { FilmCard } from '@/components/FilmCard/FilmCard';
import styles from './page.module.css';
import { Film, useGetMoviesQuery } from '@/redux/services/movieApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genresActions } from '@/redux/features/genres';
import { filmsActions } from '@/redux/features/films';
import { selectAllFilms, selectFilteredFilms } from '@/redux/features/films/selector';
import { selectFilterModule } from '@/redux/features/filter/selector';
// export interface Film {
//   title: string
//   posterUrl: string
//   releaseYear: number
//   description: string
//   genre: string
//   id: string
//   rating: number
//   director: string
//   reviewIds: string[]
// }

export default function Home() {
  const { data: films, isLoading } = useGetMoviesQuery(null);
  const allFilms = useSelector((state) => selectAllFilms(state));
  const filteredFilms = useSelector((state) => selectFilteredFilms(state));
  const filmsToPage = filteredFilms ? filteredFilms : allFilms;
  const genres = Array.from(new Set(filmsToPage?.map(film => film.genre)).values());
  console.log(genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(genresActions.set(genres));
    dispatch(filmsActions.setAllFilms(films));
  }, [filmsToPage, dispatch]);

  return (
    <section className={styles.main}>
      {filmsToPage && filmsToPage.map(film => (
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
      {/* {JSON.stringify(films, null, 2)} */}
    </section>
  );
}

