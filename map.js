const numbers = [4, 6, 8, 10, 12];
const doubleIt = number => number * 2;

// const output = numbers.map(doubleIt);
const output = numbers.map(x => x*2);
console.log(output);

const squares = numbers.map(x => x*x);
console.log(squares);