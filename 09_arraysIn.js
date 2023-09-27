//  array

const myArr = [1, 2, 3, 4, 5];

const myHeroes = ["shaktiman", "naagraj", "baalbir"];

const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr);
console.log(myArr[0]);

// Array methods

// 1 - Push

myArr.push(6);
console.log(myArr);

// 2 - Pop

myArr.pop();
console.log(myArr);

// 3 - unshift

myArr.unshift(0);
console.log(myArr);

// 4 - shift

myArr.shift();
console.log(myArr);

// 5 - Includes

console.log(myArr.includes(7));

// 6 - indexof

console.log(myArr.indexOf(2));

// 7 - join

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

// 8 - slice, splice

// slice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

// splice

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);

//
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

// 9 - concat

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// 10 - spread

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);

// 11 - flat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// 12- isArray
console.log(Array.isArray("Hitesh"));

// Array.from

console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting

// 13 - Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
