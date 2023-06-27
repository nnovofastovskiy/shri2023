'use client'

import styles from './Cart.module.css';
import CartIcon from './cart.svg';

import Image from "next/image";
import { CartProps } from './Cart.props';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectAllAmount } from '@/redux/features/cart/selector';
import { TypeRootState } from '@/redux/store';


export function Cart({ count }: CartProps) {
    // count = 10;
    const allCount = useSelector((state: TypeRootState) => selectAllAmount(state));
    return (
        <Link
            className={styles.link}
            href="/cart"
        >
            {allCount > 0 && <div className={styles.counter}>{allCount}</div>}
            <CartIcon className={styles.icon} />
        </Link>
    );
}