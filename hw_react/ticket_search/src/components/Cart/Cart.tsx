import styles from './Cart.module.css';
import CartIcon from './cart.svg';

import Image from "next/image";
import { CartProps } from './Cart.props';
import Link from 'next/link';


export function Cart({ count = 30 }: CartProps) {
    return (
        <Link
            className={styles.link}
            href="/cart"
        >
            <div className={styles.counter}>{count}</div>
            {/* <Image className={styles['cart-icon']} src={"./cart.svg"} alt={""} width={32} height={32} /> */}
            <CartIcon className={styles.icon} />
        </Link>
    );
}