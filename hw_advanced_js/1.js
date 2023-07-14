function Sequence(from, to, step) {
    if (!(this instanceof Sequence)) {
        return new Sequence(from, to, step);
    }
    this.from = from;
    this.to = to
    this.step = step
    this.current = this.from
}

Sequence.prototype[Symbol.iterator] = function () {
    let current = this.from;
    
    return {
        next: () => {
            if (current <= this.to) {
                const value = current;
                current = (this.to > this.from) ? current + this.step : current - this.step;
                return {value, done: false}
            }
            if (current >= this.to) {
                const value = current;
                current = (this.to > this.from) ? current + this.step : current - this.step;
                return {value, done: false}
            }
            return {done: true}
        }
    }
}

Sequence.prototype[Symbol.toStringTag] = 'SequenceOfNumbers';

Sequence.prototype.toString = function () {
    return `Sequence of numbers from ${this.from} to ${this.to} with step ${this.step}`
}

Sequence.prototype.valueOf = function () {
    return Array.from(this).length;
}

Sequence.prototype.setStep = function (step) {
    return new Sequence(this.current, this.to, step);
}

const sequence = Sequence(0,10,1);
console.log(...sequence);

for (const i of sequence) {
    console.log(i);
}

console.log(Object.prototype.toString.call(sequence));
console.log(String(new Sequence(0,10,1)));
console.log(Number(new Sequence(0,10,1)));

console.log(Array.from(sequence));