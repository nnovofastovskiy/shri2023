import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CounterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    withRemove?: boolean
}