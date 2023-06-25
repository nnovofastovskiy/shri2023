'use client'

import { useSelector } from 'react-redux';
import styles from './page.module.css'
import { selectCartModule, selectProductsInCart } from '@/redux/features/cart/selector';

export default function CartPage() {
  const inCart = useSelector((state) => selectCartModule(state));
  console.log(inCart);

  return (
    <main className={styles.main}>
      Cart
      <div>
        {JSON.stringify(inCart, null, 4)}
      </div>
    </main>
  )
}
