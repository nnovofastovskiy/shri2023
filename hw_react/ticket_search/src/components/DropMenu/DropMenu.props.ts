import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DropMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    items: string[],
    top: number,
    selectHandler: (selected: string) => void
}