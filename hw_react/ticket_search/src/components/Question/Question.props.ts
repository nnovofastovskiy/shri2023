import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface QuestionProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    question: string,
    answer: string
}