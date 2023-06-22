import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';

export function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <footer
            className={cn(className, styles.footer)}
            {...props}
        >
            Footer
        </footer>
    );
}