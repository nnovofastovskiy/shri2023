import { checkNonNullable, imageCreator, makeDisplays, updateDisplayBlock, updateDisplay, initAnimation, layerByLayer, segmentBySegment, transition, charToDisplay, stringToDisplay, marquee, blink, typing, } from '../src';

export type DomOptions = {
    className: string,
    templateId: string
}
const domOptions: DomOptions = {
    className: 'display',
    templateId: 'segmentImage',
};
const getImage = imageCreator('segmentImage');
checkNonNullable(getImage);
const frameBuffers = initAnimation(domOptions);
function startAnimation(frames, parent) {
    frameBuffers.set(parent, [...frames].reverse());
}
const segmentDescription = <HTMLDivElement>document.getElementById('segmentDescription');
segmentDescription.append(getImage());
const [descriptionDisplay] = makeDisplays(1, segmentDescription, domOptions);
updateDisplay('abcdefhijklm'.split('').concat(['g1', 'g2']), descriptionDisplay);
const oneLetter = document.getElementById('oneLetter');
const oneLetterImage = document.getElementById('oneLetterImage');
oneLetter.oninput = function (event) {
    const letter = event.target.value[0] || ' ';
    oneLetterImage.innerHTML = '';
    oneLetterImage.append(getImage());
    updateDisplay(charToDisplay(letter, { convertToUpperCase: true }), document.querySelector('#oneLetterImage .display'));
};
const textString = <HTMLInputElement>document.getElementById('textString');
const textStringImage = document.getElementById('textStringImage');
textString.oninput = function (event) {
    const text = event.target.value;
    const segments = stringToDisplay(text, { convertToUpperCase: true });
    updateDisplayBlock(segments, textStringImage, domOptions);
};
const startMarquee = <HTMLButtonElement>document.getElementById('startMarquee');
const startBlink = <HTMLButtonElement>document.getElementById('startBlink');
const startTyping = <HTMLButtonElement>document.getElementById('startTyping');
const transitionImage = <HTMLDivElement>document.getElementById('transitionImage');
const animationFromString = <HTMLInputElement>document.getElementById('animationFromString');
const animationToString = <HTMLInputElement>document.getElementById('animationToString');
startMarquee.onclick = function (event) {
    const frames = marquee(textString.value, textString.value.length, { convertToUpperCase: true });
    startAnimation(frames, textStringImage);
};
startBlink.onclick = function (event) {
    const frames = blink(textString.value, 10, { convertToUpperCase: true });
    startAnimation(frames, textStringImage);
};
startTyping.onclick = function (event) {
    const frames = typing(textString.value, { convertToUpperCase: true });
    startAnimation(frames, textStringImage);
};
function startTransition(transitionFunction, transitionOptions?) {
    const from = stringToDisplay(animationFromString.value, { convertToUpperCase: true });
    const to = stringToDisplay(animationToString.value, { convertToUpperCase: true });
    const frames = transition(from, to, transitionFunction, transitionOptions);
    startAnimation(frames, transitionImage);
}
const startTransitionSegmentBySegment = <HTMLButtonElement>document.getElementById('startTransitionSegmentBySegment');
const startTransitionLayerByLayer = <HTMLButtonElement>document.getElementById('startTransitionLayerByLayer');
const segmentBySegmentDense = <HTMLInputElement>document.getElementById('segmentBySegmentDense');
startTransitionSegmentBySegment.onclick = function (event) {
    startTransition(segmentBySegment, { dense: segmentBySegmentDense.checked });
};
startTransitionLayerByLayer.onclick = function (event) {
    startTransition(layerByLayer);
};
