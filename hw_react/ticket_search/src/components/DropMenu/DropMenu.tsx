import { DropMenuProps } from "./DropMenu.props";
import cn from 'classnames';
import styles from './DropMenu.module.css';
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from "react";

interface DropMenuItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    title: string,
    id?: string,
    selectHandler: (payload: any) => void
}

function DropMenuItem({ className, title, id, selectHandler }: DropMenuItemProps) {

    return (
        <li
            className={className}
        >
            <button onClick={() => {
                if (title === 'Не выбрано') return selectHandler('');
                return selectHandler({ name: title, id: id });
            }}>
                {title}
            </button>
        </li>
    );
}

export function DropMenu({ className, items, top, selectHandler, closeHandler, isOpen, ...props }: DropMenuProps) {
    const ref = useRef(null);
    const clickHandle = (e: MouseEvent) => {
        if (e.target != ref.current) {
            isOpen && closeHandler();
        }
    };
    useEffect(() => {
        document.addEventListener('click', clickHandle);
        return () => {
            document.removeEventListener('click', clickHandle);
        };
    }, [isOpen]);
    return (
        <>
            <ul
                ref={ref}
                style={{ top: top }}
                className={cn(className, styles.wrapper)}
            >
                <DropMenuItem
                    key={`dropItemMenu-default`}
                    className={styles.item}
                    title={'Не выбрано'}
                    selectHandler={selectHandler}
                />
                {items.map((item, i) => {
                    return (
                        <DropMenuItem
                            key={`dropItemMenu-${i}`}
                            className={styles.item}
                            title={item.text}
                            id={item.id}
                            selectHandler={selectHandler}
                        />
                    );
                })}
            </ul>
        </>
    );
}