//  this -- Current Context referral

const user = {
  username: "Shubham",
  website: "shubham-jha.in",

  wecomeMessage: function () {
    console.log(`${this.username}, welcome to website `);

    console.log(this);
  },
};

user.wecomeMessage();
user.username = "sam";
user.wecomeMessage();

console.log(this);

//

function chai() {
  let username = "Shubham";
  //   console.log(this);

  console.log(this.username);
}

chai();

// Array function

const addTwo = (num1, num2) => {
  return num1 + num2;

  // const addTwo = (num1, num2) => num1 + num2;

  // const addTwo = (num1, num2) => (num1 + num2);
};

console.log(addTwo(3, 5));

//
