import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import Link from "next/link";

export function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <footer
            className={cn(className, styles.footer)}
            {...props}
        >
            <Link
                className={styles.link}
                href={'/questions'}
            >
                Вопросы и ответы
            </Link>
            <Link
                className={styles.link}
                href={'/about'}
            >
                О нас
            </Link>
        </footer>
    );
}