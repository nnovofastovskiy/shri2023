import Link from "next/link";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from 'classnames';
import { Cart } from "@/components/Cart/Cart";

export function Header({ className, ...props }: HeaderProps): JSX.Element {
    return (
        <header
            className={cn(className, styles.header)}
            {...props}
        >
            <Link
                className={styles.logo}
                href='/'
            >
                Билетопоиск
            </Link>
            <Cart count={30} />
        </header>
    );
}