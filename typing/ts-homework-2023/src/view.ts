import { segmentCodes } from './model';
export function isKnownChar(char: string): char is Char {
    return char in segmentCodes;
}

export type ToDisplayOptions = {
    convertToUpperCase: boolean,
    unknownChar: string
}

export type Char = keyof typeof segmentCodes;

export function charToDisplay(char: string, options?: ToDisplayOptions) {
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
export function stringToDisplay(input: string[], options: ToDisplayOptions) {
    return [...input].map(c => charToDisplay(c, options));
}
