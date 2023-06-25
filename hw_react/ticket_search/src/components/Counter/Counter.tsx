import styles from './Counter.module.css';
import PlusIcon from './plus.svg';
import MinusIcon from './minus.svg';
import RemoveIcon from './remove.svg';

import { CounterProps } from './Counter.props';
import cn from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductAmount } from '@/redux/features/cart/selector';
import { cartActions } from '@/redux/features/cart';


export function Counter({ className, id, withRemove = false }: CounterProps) {
    const count = useSelector((state) => selectProductAmount(state, id));
    const dispatch = useDispatch();
    return (
        <div className={cn(className, styles.wrapper)}>
            <button
                className={cn(styles.btn)}
                disabled={count <= 0}
                onClick={(e) => {
                    // console.log(e)
                    e.preventDefault();
                    dispatch(cartActions.decrement(id));
                    // setCount(prev => prev - 1);
                }}
            >
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
                    dispatch(cartActions.increment(id));
                    // setCount(prev => prev + 1);
                }}
            >
                <PlusIcon
                    className={styles.plus}
                    onClick={(e: MouseEvent) => e.preventDefault()}
                />
            </button>
            {withRemove && <button
                className={cn(styles.btn, styles.remove)}
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(cartActions.remove(id));
                    // setCount(prev => prev + 1);
                }}
            >
                <RemoveIcon
                    onClick={(e: MouseEvent) => e.preventDefault()}
                />
            </button>}
        </div>
    );
}