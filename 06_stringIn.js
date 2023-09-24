const name = "shubham";
const repoCount = 50;

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);
// string interpolation

const gameName = new String(`freefire-Pro`);
//Declare string

console.log(gameName[0]);
console.log(gameName.__proto__);
// Access Prototype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString01 = "        shubham    ";
console.log(newString01.trim());

const url = "https://Shubham.com/shubham%20kumar";
console.log(url.replace(`%20`, `-`));

console.log(url.includes(`Shubh`));

console.log(gameName.split(`-`));
