import { SegmentNames, segmentCodes } from './model';
export function isKnownChar(char: string): char is SegmentNames {
    return char in segmentCodes;
}

export type Options = {
    convertToUpperCase: boolean,
    unknownChar?: "exception"
}

export type State = SegmentNames[];
export type States = State[];

export function charToDisplay(char: string, options?: Options) {
    console.log(options);
    if (options?.convertToUpperCase) {
        char = char.toUpperCase();
        console.log(char);
    }
    console.log({ char });
    if (!isKnownChar(char)) {
        if (options?.unknownChar === 'exception') {
            throw new Error(`Cannot convert character ${char} to 14-segment display`);
        }
        return options?.unknownChar ?? [];
    }
    return segmentCodes[char];
}
export function stringToDisplay(input: string, options: Options) {
    return [...input].map(c => charToDisplay(c, options));
}
