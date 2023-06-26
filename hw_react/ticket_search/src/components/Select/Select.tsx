'use client';

import { SelectProps } from "./Select.props";
import cn from 'classnames';
import styles from './Select.module.css';
import ArrowIcon from './arrow.svg';
import { DropMenu } from "../DropMenu/DropMenu";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";



export function Select({ className, label, placeholder, dropItems, onChangeHandler, selectHandler, ...props }: SelectProps) {
    const refPortal = useRef<Element | null>(null);
    const refSelect = useRef<HTMLDivElement | null>(null);

    const [isDropOpen, setIsDropOpen] = useState(false);
    const [top, setTop] = useState<number>(0);
    const selected = useSelector(selectHandler);
    // console.log(selected);

    const closeHandler = useCallback(() => setIsDropOpen(false), []);

    useEffect(() => {
        refPortal.current = document.getElementById("sidebar-portal");
        if (refSelect.current) {
            const top = refSelect.current.offsetTop;
            const height = refSelect.current.offsetHeight;
            setTop(top + height + 2);
        }
    }, []);

    useEffect(() => {
        setIsDropOpen(false);
    }, [selected]);
    return (
        <div
            className={cn(className, styles.wrapper, { [styles.selected]: selected })}
            ref={refSelect}
        >
            <label className={styles.label}>
                {label}
                <button
                    className={styles.button}
                    onClick={() => setIsDropOpen(prev => !prev)}
                // onBlur={() => setIsDropOpen(false)}
                >
                    {selected ? selected.name : placeholder}
                    <ArrowIcon className={cn(styles.arrow, { [styles.open]: isDropOpen })} />
                </button>
            </label>
            {refPortal.current && isDropOpen && createPortal(
                <DropMenu
                    className={styles['drop-menu']}
                    items={dropItems}
                    top={top}
                    selectHandler={onChangeHandler}
                    closeHandler={closeHandler}
                    isOpen={isDropOpen}
                />,
                refPortal.current)}
        </div>
    );
}