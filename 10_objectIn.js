//  singleton
// object literals

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Shubham",
  "full Name": "shubham jha",
  [mySym]: "key1" /* symbol always define square box */,
  study: "BCA",
  location: "Delhi",
  email: "shubham@google.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "Saturday"],
};
console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser["full Name"]);

console.log(jsUser[mySym]);

// Change Value

jsUser.email = "shubham@chatgpt.com";
console.log(jsUser["email"]);

// freeze
// Object.freeze(jsUser);
jsUser.email = "shubham@yahoo.com";

console.table(jsUser);
console.log(jsUser);

// added functions

jsUser.greeting = function () {
  console.log("hello world");
};

jsUser.greetingTwo = function () {
  console.log(`hello world! ${this.name}.`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

console.log(jsUser);

// singleton

// const tinderUser = new Object() /* singleton object */

const tinderUser = {}; /* Non-singleton object */

tinderUser.id = "12345";
tinderUser.name = "Shubham";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularuser = {
  email: "shubham@microsoft.com",
  fullname: {
    userFullname: {
      firstname: "shubham",
      lastname: "jha",
    },
  },
};
console.log(regularuser.fullname);
console.log(regularuser.fullname.userFullname.firstname);

//  Assign

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 5: "f" };
// const obj3 = { obj1, obj2 };
const obj3 = Object.assign({}, obj1, obj2, obj4);
console.log(obj3);

// spread operators

const obj5 = { ...obj1, ...obj2, ...obj4 };
console.log(obj5);

//Array of the object

const users = [
  {
    id: 1,
    email: "sjha@microsoft.com",
  },
  {
    id: 2,
    email: "sjha@google.com",
  },
  {
    id: 3,
    email: "sjha@yahoo.com",
  },
  {
    id: 4,
    email: "sjha@gamil.com",
  },
];
console.log(users[2].email);

// keys / values / entries / hasOwnproperty
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLogged"));

// destructuring

const course = {
  coursename: "chai aur javaScript",
  price: "999",
  courseInstructor: "hitesh sir",
};
// console.log(course.courseInstructor);

const { courseInstructor: instructor } = course;
console.log(instructor);

// Api
{
  name: "Shubham";
  state: "Bihar";
  Country: "Bharat";
}

[{}, {}, {}];
// Expline further
