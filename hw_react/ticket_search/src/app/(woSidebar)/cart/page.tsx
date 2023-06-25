'use client'

import { useSelector } from 'react-redux';
import styles from './page.module.css'
import { selectProductsInCart } from '@/redux/features/cart/selector';

export default function Cart() {
  const inCart = useSelector((state) => selectProductsInCart(state));
  console.log(inCart);

  return (
    <main className={styles.main}>
      Cart
    </main>
  )
}
