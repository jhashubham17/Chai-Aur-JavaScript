// - OOP (Object-Oriented Program)

// Object literal

const user = {
  username: "Shubham",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got User Details From Database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

// Constructor Function

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.gretting = function () {
    console.log(`Welcome, Mr $(username)`);
  };
  //   return this;
}
//
const userOne = new User("Shubham", 12, true);
const userTwo = new User("Kumar", 10, false);

console.log(userOne);
console.log(userTwo);
