'use client';

import { FilmCardBigProps } from "./FilmCardBig.props";
import cn from 'classnames';
import styles from './FilmCardBig.module.css';
import Link from "next/link";
import Image from "next/image";
import { Counter } from "../Counter/Counter";

export function FilmCardBig({
    className,
    title,
    posterUrl,
    releaseYear,
    description,
    genre,
    id,
    rating,
    director,
    reviewIds
}: FilmCardBigProps) {
    return (
        <div
            className={cn(className, styles.wrapper)}
        >
            <Image
                className={styles.img}
                src={posterUrl}
                alt={`Постер к фильму ${title}`}
                width={400}
                height={500}
            />
            <div className={styles.info}>
                <div className={styles.container}>
                    <h2 className={styles.title}>{title}</h2>
                    <Counter className={styles.counter} id={id} />
                </div>
                <span className={styles.genre}><span>Жанр:</span> {genre}</span>
                <span className={styles.year}><span>Год выпуска:</span> {releaseYear}</span>
                <span className={styles.rating}><span>Рейтинг:</span> {rating}</span>
                <span className={styles.director}><span>Режиссер:</span> {director}</span>
                <h4 className={styles['description-title']}>Описание</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}