'use client';

import { QuestionProps } from "./Question.props";
import cn from 'classnames';
import styles from './Question.module.css';
import ArrowIcon from './arrow.svg';
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";



export function Question({ className, question, answer, ...props }: QuestionProps) {
    const [isDropOpen, setIsDropOpen] = useState(false);

    return (
        <button
            className={cn(className, styles.button)}
            onClick={() => setIsDropOpen(prev => !prev)}
        >
            <div className={styles.container}>
                <h2 className={styles.question}>{question}</h2>
                <ArrowIcon className={cn(styles.arrow, { [styles.open]: isDropOpen })} />
            </div>
            {isDropOpen &&
                <p className={styles.answer}>
                    {answer}
                </p>
            }
        </button>
    );
}