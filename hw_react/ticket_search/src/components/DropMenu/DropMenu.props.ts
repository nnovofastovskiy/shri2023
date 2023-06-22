import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

export interface DropMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    items: string[]
}