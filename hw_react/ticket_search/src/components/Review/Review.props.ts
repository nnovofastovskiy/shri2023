import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    name: string,
    text: string,
    rating: number,
    avatarUrl?: string
}