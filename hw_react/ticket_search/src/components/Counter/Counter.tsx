import styles from './Counter.module.css';
import PlusIcon from './plus.svg';
import MinusIcon from './minus.svg';

import { CounterProps } from './Counter.props';
import cn from 'classnames';
import { useState } from 'react';


export function Counter({ className }: CounterProps) {
    const [count, setCount] = useState(0); // сделать нормально корзину
    return (
        <div className={cn(className, styles.wrapper)}>
            <button
                className={cn(styles.btn)}
                disabled={count <= 0}
                onClick={(e) => {
                    console.log(e)
                    e.preventDefault();
                    setCount(prev => prev - 1);
                }}>
                <MinusIcon
                    className={styles.minus}
                    onClick={(e: MouseEvent) => e.preventDefault()}
                />
            </button>
            <span className={styles.count}>{count}</span>
            <button className={cn(styles.btn)}
                disabled={count >= 30}
                onClick={(e) => {
                    e.preventDefault();
                    setCount(prev => prev + 1);
                }}>
                <PlusIcon
                    className={styles.plus}
                    onClick={(e: MouseEvent) => e.preventDefault()}
                />
            </button>
        </div>
    );
}