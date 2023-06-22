'use client'

import { SelectProps } from "./Select.props";
import cn from 'classnames';
import styles from './Select.module.css';
import ArrowIcon from './arrow.svg';
import { DropMenu } from "../DropMenu/DropMenu";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";



export function Select({ className, label, placeholder, dropItems, ...props }: SelectProps) {
    const [isDropOpen, setIsDropOpen] = useState(false);
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.getElementById("sidebar-portal");
        setMounted(true);
    }, [])
    return (
        <div className={cn(className, styles.wrapper)}>
            <label className={styles.label}>
                {label}
                <button
                    className={styles.button}
                    onClick={() => setIsDropOpen(isDropOpen => !isDropOpen)}
                >
                    {placeholder}
                    <ArrowIcon className={styles.arrow} />
                </button>
            </label>
            {(mounted && ref.current) && isDropOpen && createPortal(<DropMenu items={dropItems} />, ref.current)}
        </div>
    )
}