import { FilmCard } from '@/components/FilmCard/FilmCard'
import styles from './page.module.css'

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

export default async function Home() {
  const res = await fetch('http://localhost:3001/api/movies');
  const films: Film[] = await res.json();

  return (
    <section className={styles.main}>
      {films.map(film => (
        <FilmCard
          className={styles['film-card']}
          key={film.id}
          filId={film.id}
          title={film.title}
          genre={film.genre}
          imgSrc={film.posterUrl}
          filmHref={`/${film.id}`}
        />
      ))}
      {JSON.stringify(films, null, 2)}
    </section>
  );
}

