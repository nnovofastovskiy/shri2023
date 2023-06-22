import { DropMenuProps } from "./DropMenu.props";
import cn from 'classnames';
import styles from './DropMenu.module.css';
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface DropMenuItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {

}

function DropMenuItem({ className, title, ...props }: DropMenuItemProps) {
    return (
        <li>
            <button>
                {title}
            </button>
        </li>
    )
}

export function DropMenu({ className, items, ...props }: DropMenuProps) {
    return (
        <ul className={cn(className, styles.wrapper)}>
            {items.map((item, i) => {
                return <DropMenuItem key={`dropItemMenu-${i}`} title={item} />
            })}
        </ul>
    )
}