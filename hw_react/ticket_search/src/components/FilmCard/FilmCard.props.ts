import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FilmCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    filmId: string,
    title: string,
    genre: string,
    imgSrc: string,
    filmHref: string,
    withRemove?: boolean
}