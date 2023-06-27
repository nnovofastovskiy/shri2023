import { FilmCardBig } from '@/components/FilmCardBig/FilmCardBig'
import styles from './page.module.css'
import { Review } from '@/components/Review/Review'

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

export interface Review {
  id: string,
  name: string,
  text: string,
  rating: number
}


export default async function Film({ params }: { params: { filmId: string } }) {
  const getFilm = fetch(`http://localhost:3001/api/movie?movieId=${params.filmId}`);
  const getReviews = fetch(`http://localhost:3001/api/reviews?movieId=${params.filmId}`);
  const [film, reviews]: [Film, Review[]] = await Promise.all([getFilm, getReviews])
    .then(async ([filmRes, reviewsRes]) => {
      const film = await filmRes.json();
      const reviews = await reviewsRes.json();
      return [film, reviews];
    });

  return (
    <main className={styles.main}>
      <FilmCardBig
        title={film.title}
        posterUrl={film.posterUrl}
        releaseYear={film.releaseYear}
        description={film.description}
        genre={film.genre}
        id={film.id}
        rating={film.rating}
        director={film.director}
        reviewIds={film.reviewIds} />
      {reviews.map(review => (
        <Review
          key={review.id}
          id={review.id}
          name={review.name}
          text={review.text}
          rating={review.rating}
        />
      ))}
    </main>
  )
}
