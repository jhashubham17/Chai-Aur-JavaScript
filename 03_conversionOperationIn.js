// Number

let score = "33";
console.log(typeof score);

const scoredInNumber = Number(score);
console.log(typeof scoredInNumber);

/* 

"33"      => Number
"33abc"   => NaN
null      => 0
undefined => NaN
true      => 1
false     => 0
"Shubham" =>NaN
*/

// Boolean

let isLoggedIn = 1;
console.log(typeof isLoggedIn);

let bolleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof bolleanIsLoggedIn);

/*

1         => true
0         => false
"shubham" => true
null      => boolean
undefined => boolean
 */

// String

let someNumber;
console.log(someNumber);
console.log(typeof someNumber);

let stringNumber = String(someNumber);
console.log(typeof stringNumber);

/*

33        => string
true      => string 
undefined =>string
 */

// Operations

console.log("Operation");

let value = 10;
let negValue = -value;

console.log(negValue);

// operations are

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 3);
console.log(2 % 2);

//
let str1 = "hello";
let str2 = "world!";

let str3 = str1 + str2;
console.log(str3);

//
console.log("1" + 2); /*  12   */
console.log(1 + "2"); /*  12   */
console.log("1" + 2 + 2); /*  122   */
console.log(2 + 2 + "1"); /*  41   */
