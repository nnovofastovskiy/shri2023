import { InputProps } from "./Input.props";
import cn from 'classnames';
import styles from './Input.module.css';
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export function Input({ className, label, placeholder, onChangeHandler, selectHandler, ...props }: InputProps) {
    const value = useSelector(selectHandler);
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        ref.current.value = value;
    }, []);
    return (
        <div className={cn(className, styles.wrapper)} {...props}>
            <label className={styles.label}>
                {label}
                <input
                    ref={ref}
                    className={styles.input}
                    type="text"
                    placeholder={placeholder}
                    onChange={e => onChangeHandler(e.target.value)}
                />
            </label>
        </div>
    )
}