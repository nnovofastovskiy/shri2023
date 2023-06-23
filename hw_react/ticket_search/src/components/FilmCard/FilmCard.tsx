'use client';

import { FilmCardProps } from "./FilmCard.props";
import cn from 'classnames';
import styles from './FilmCard.module.css';
import Link from "next/link";
import Image from "next/image";
import { Counter } from "../Counter/Counter";

export function FilmCard({
    className,
    filId,
    title,
    genre,
    imgSrc,
    filmHref
}: FilmCardProps) {
    return (
        <Link
            className={cn(className, styles.link)}
            href={filmHref}
        >
            <Image
                className={styles.img}
                src={imgSrc}
                alt={`Постер к фильму ${title}`}
                width={100}
                // layout="fill"
                height={120}
            />
            <h4 className={styles.title}>{title}</h4>
            <span className={styles.genre}>{genre}</span>
            <Counter className={styles.counter} count={0} />
        </Link>
    );
}