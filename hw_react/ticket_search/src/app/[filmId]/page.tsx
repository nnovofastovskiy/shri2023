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


export default async function Film({ params }: { params: { filmId: string } }) {
  const res = await fetch('http://localhost:3001/api/movie?movieId=2aT976Fs_Bek0e2ZR_05V');
  const film: Film = await res.json();
  console.log(film)
  return (
    <main className={styles.main}>
      {/* Film page {params.filmId} */}
      <FilmCard filId={params.filmId} title={film.title} genre={film.genre} imgSrc={film.posterUrl} filmHref={''} />
      {/* {JSON.stringify(film)} */}
    </main>
  )
}
