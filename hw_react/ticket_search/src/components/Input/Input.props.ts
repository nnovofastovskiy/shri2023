import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
    placeholder?: string,
    onChangeHandler: (title: string) => void,
    selectHandler: (store: any) => any
}