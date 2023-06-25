'use client';

import { FilmCardProps } from "./FilmCard.props";
import cn from 'classnames';
import styles from './FilmCard.module.css';
import Link from "next/link";
import Image from "next/image";
import { Counter } from "../Counter/Counter";

export function FilmCard({
    className,
    filmId,
    title,
    genre,
    imgSrc,
    filmHref,
    withRemove = false
}: FilmCardProps) {
    return (
        <Link
            className={cn(className, styles.link)}
            href={`/films/${filmHref}`}
        >
            <Image
                className={styles.img}
                src={imgSrc}
                alt={`Постер к фильму ${title}`}
                width={100}
                // layout="fill"
                height={120}
            />
            <div className={styles.info}>
                <h4 className={styles.title}>{title}</h4>
                <span className={styles.genre}>{genre}</span>
            </div>
            <Counter className={styles.counter} id={filmId} withRemove={withRemove} />
        </Link>
    );
}