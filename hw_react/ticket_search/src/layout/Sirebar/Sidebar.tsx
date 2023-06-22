import { SidebarProps } from "./Sidebar.props";
import cn from 'classnames';
import styles from './Sidebar.module.css';

export function Sidebar({ className, ...props }: SidebarProps): JSX.Element {
    return (
        <div
            className={cn(className, styles.sidebar)}
            {...props}
        >
            Sidebar
        </div>
    );
}