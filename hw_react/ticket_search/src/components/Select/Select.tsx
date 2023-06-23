'use client';

import { SelectProps } from "./Select.props";
import cn from 'classnames';
import styles from './Select.module.css';
import ArrowIcon from './arrow.svg';
import { DropMenu } from "../DropMenu/DropMenu";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";



export function Select({ className, label, placeholder, dropItems, ...props }: SelectProps) {
    const refPortal = useRef<Element | null>(null);
    const refSelect = useRef<HTMLDivElement | null>(null);

    const [mounted, setMounted] = useState(false);
    const [isDropOpen, setIsDropOpen] = useState(false);
    const [top, setTop] = useState<number>(0);

    const [selected, setSelected] = useState<string>();

    const selectHandler = useCallback((selected: string) => {
        // console.log('selectHandler');
        setSelected(selected);
    }, []);

    const closeHandler = useCallback(() => setIsDropOpen(false), []);

    useEffect(() => {
        refPortal.current = document.getElementById("sidebar-portal");
        if (refSelect.current) {
            const top = refSelect.current.offsetTop;
            const height = refSelect.current.offsetHeight;
            setTop(top + height);
        }

        setMounted(true);
    }, []);

    useEffect(() => {
        setIsDropOpen(false);
    }, [selected]);
    return (
        <div
            className={cn(className, styles.wrapper)}
            ref={refSelect}
        >
            <label className={styles.label}>
                {label}
                <button
                    className={styles.button}
                    onClick={() => setIsDropOpen(prev => !prev)}
                // onBlur={() => setIsDropOpen(false)}
                >
                    {selected ? selected : placeholder}
                    <ArrowIcon className={styles.arrow} />
                </button>
            </label>
            {(mounted && refPortal.current) && isDropOpen && createPortal(
                <DropMenu
                    className={styles['drop-menu']}
                    items={dropItems}
                    top={top}
                    selectHandler={selectHandler}
                    closeHandler={closeHandler}
                />,
                refPortal.current)}
        </div>
    );
}