import styles from './Counter.module.css';
import PlusIcon from './plus.svg';
import MinusIcon from './minus.svg';

import { CounterProps } from './Counter.props';
import Link from 'next/link';
import cn from 'classnames';


export function Counter({ className, count }: CounterProps) {
    return (
        <div className={cn(className, styles.wrapper)}>
            <button>
                <MinusIcon />
            </button>
            <span>0</span>
            <button>
                <PlusIcon />
            </button>
        </div>
    );
}