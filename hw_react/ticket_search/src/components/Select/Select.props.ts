import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label?: string,
    placeholder?: string,
    dropItems: string[],
    dropHandler?: () => void
}