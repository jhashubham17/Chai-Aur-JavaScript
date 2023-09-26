// Dates

let myDate = new Date();
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

//
let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());

//
let createDate = new Date("01-14-2023");
console.log(createDate.toLocaleString());

//
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now() / 1000));
//  in second

//
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getTime());

//
newDate.toLocaleString("default", {
  weekday: "long",
});
