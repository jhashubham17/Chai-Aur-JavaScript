// Number
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));

const hundread = 1000000;
console.log(hundread.toLocaleString());

// Maths

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(4, 6, 8, 9));
console.log(Math.min(4, 6, 8, 9));

console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10) + 1);
