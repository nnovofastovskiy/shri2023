'use client';

import { FilmCard } from '@/components/FilmCard/FilmCard';
import styles from './page.module.css';
import { Film, useGetMoviesQuery } from '@/redux/services/movieApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { genresActions } from '@/redux/features/genres';
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

export default async function Home() {
  const films: Film[] = fetch('http://localhost:3001/api/movies').then(res => res.json())

  // const films: Film[] = await res.json();
  const genres = Array.from(new Set(films.map(film => film.genre)).values());
  // console.log(genres);
  // const { data: films, isLoading } = useGetMoviesQuery(null);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(genresActions.set(genres))
  // });

  return (
    <section className={styles.main}>
      {films && films.map(film => (
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

