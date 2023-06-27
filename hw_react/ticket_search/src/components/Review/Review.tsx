import { ReviewProps } from "./Review.props";
import cn from 'classnames';
import styles from './Review.module.css';
import Link from "next/link";
import Image from "next/image";
import { Counter } from "../Counter/Counter";

const REVIEW_IMG_DEFAULT = '/review.png';

export function Review({
    className,
    id,
    name,
    text,
    rating,
    avatarUrl
}: ReviewProps) {
    return (
        <div
            className={cn(className, styles.wrapper)}
        >
            <Image
                className={styles.img}
                src={avatarUrl || REVIEW_IMG_DEFAULT}
                alt={'Аватар к отзыву'}
                width={100}
                height={100}
            />
            <div className={styles.info}>
                <span className={styles.title}>
                    <b>{name}</b>
                    <span>Оценка: <b>{rating}</b></span>
                </span>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
}