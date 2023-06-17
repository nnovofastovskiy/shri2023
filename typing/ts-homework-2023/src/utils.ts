export function clampToLength(state: string, length: number) {
    return state
        .concat(emptyDisplays(Math.max(0, length - state.length)))
        .slice(0, length);
}
export function emptyDisplays(amount: number) {
    return Array.from({ length: amount }, () => []);
}
