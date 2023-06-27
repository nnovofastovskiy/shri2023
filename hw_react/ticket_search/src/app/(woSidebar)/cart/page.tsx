'use client';

import { useSelector } from 'react-redux';
import styles from './page.module.css';
import { selectAllAmount, selectCartModule, selectProductsInCart } from '@/redux/features/cart/selector';
import { useGetMoviesQuery } from '@/redux/services/movieApi';
import { FilmCard } from '@/components/FilmCard/FilmCard';
import { TypeRootState } from '@/redux/store';

function CartResult({ amount }: { amount: number }) {
  return (
    <div className={styles.result}>
      <span>
        Итого билетов:
      </span>
      <span>
        {amount}
      </span>
    </div>
  )
}

export default function CartPage() {
  const inCart = useSelector((state: TypeRootState) => selectProductsInCart(state));
  const { data, isLoading } = useGetMoviesQuery(null);
  const filmsInCart = data?.filter(film => inCart.includes(film.id));
  const allCount = useSelector((state: TypeRootState) => selectAllAmount(state));
  return (
    <main className={styles.main}>
      {filmsInCart &&
        filmsInCart.map(film => (
          <FilmCard
            key={film.id}
            filmId={film.id}
            title={film.title}
            genre={film.genre}
            imgSrc={film.posterUrl}
            filmHref={film.id}
            withRemove={true}
          />
        ))
      }
      {allCount == 0 ? <h2>Корзина пуста</h2> : <CartResult amount={allCount} />}
    </main>
  );
}
