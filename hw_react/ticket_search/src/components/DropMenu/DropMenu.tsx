import { DropMenuProps } from "./DropMenu.props";
import cn from 'classnames';
import styles from './DropMenu.module.css';
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface DropMenuItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    title: string,
    selectHandler: (selected: string) => void
}

function DropMenuItem({ className, title, selectHandler, ...props }: DropMenuItemProps) {

    return (
        <li {...props}>
            <button onClick={() => selectHandler(title)}>
                {title}
            </button>
        </li>
    );
}

export function DropMenu({ className, items, top, selectHandler, ...props }: DropMenuProps) {
    return (
        <ul
            style={{ top: top }}
            className={cn(className, styles.wrapper)}
        >
            {items.map((item, i) => {
                return <DropMenuItem
                    key={`dropItemMenu-${i}`}
                    title={item}
                    selectHandler={selectHandler}
                />;
            })}
        </ul>
    );
}