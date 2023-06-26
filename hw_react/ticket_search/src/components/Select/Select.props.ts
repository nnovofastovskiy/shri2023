import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label?: string,
    placeholder?: string,
    dropItems: {
        text: string,
        id?: string
    }[],
    dropHandler?: () => void
    onChangeHandler: (payload: string) => void,
    selectHandler: (store: any) => any
}