import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FilmCardBigProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    posterUrl: string,
    releaseYear: number,
    description: string,
    genre: string,
    id: string,
    rating: number,
    director: string,
    reviewIds: string[]
}