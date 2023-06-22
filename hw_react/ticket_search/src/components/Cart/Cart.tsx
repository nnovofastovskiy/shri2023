import styles from './Cart.module.css';
import CartIcon from './cart.svg';

import Image from "next/image";
import { CartProps } from './Cart.props';
import Link from 'next/link';


export function Cart({ count }: CartProps) {
    return (
        <Link
            className={styles.link}
            href="/cart"
        >
            {count > 0 && <div className={styles.counter}>{count}</div>}
            {/* <Image className={styles['cart-icon']} src={"./cart.svg"} alt={""} width={32} height={32} /> */}
            <CartIcon className={styles.icon} />
        </Link>
    );
}