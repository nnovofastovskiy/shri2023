'use client';

import { useSelector } from 'react-redux';
import styles from './page.module.css';
import { selectCartModule, selectProductsInCart } from '@/redux/features/cart/selector';
import { useGetMoviesQuery } from '@/redux/services/movieApi';
import { FilmCard } from '@/components/FilmCard/FilmCard';

export default function CartPage() {
  const inCart = useSelector((state) => selectProductsInCart(state));
  const { data, isLoading } = useGetMoviesQuery(null);
  console.log(data);
  const filmsInCart = data?.filter(film => inCart.includes(film.id));


  console.log(inCart);

  return (
    <main className={styles.main}>
      {filmsInCart && filmsInCart.map(film => (
        <FilmCard
          key={film.id}
          filmId={film.id}
          title={film.title}
          genre={film.genre}
          imgSrc={film.posterUrl}
          filmHref={film.id}
          withRemove={true}
        />
      ))}
      Cart
      <div>
        {JSON.stringify(inCart, null, 4)}
      </div>
    </main>
  );
}
