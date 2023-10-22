// - prototype

let myhero = ["Thor", "Spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.shubham = function () {
  console.log(`shubham is present in all object`);

  Array.prototype.heyShubham = function () {
    console.log(`Shubham say hello EveyOne`);
  };
};
heroPower.shubham();
myhero.shubham();

myhero.heyShubham();
// heroPower.heyShubham();

// inheritance

const User = {
  name: "chaieWala",
  email: "chaieWala@google.com",
};
const Teacher = {
  makeVideo: true,
};

const TeacherSupport = {
  isAvailable: false,
};

const TaSupport = {
  makeAssignment: "js Assignment",
  fullTime: true,
  __proto__: TeacherSupport /* old syntax */,
};
Teacher.__proto__ = User; /* old syntax */

// moder syntax

Object.setPrototypeOf(TeacherSupport, Teacher);

//
let anotherUserName = "ChaiAurCode";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUserName.trueLength();
"Shubham".trueLength();
"iceTea".trueLength();
