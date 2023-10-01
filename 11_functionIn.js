//  Function

//
function sayMyName() {
  console.log("Shubham jha");
}

sayMyName();

//
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumber(2, 2);

//
function sumTwoNumber(num1, num2) {
  return num1 + num2;
}

const result = sumTwoNumber(3, 5);
console.log("Result:", result);

//
function logingUserMessage(username) {
  return `${username} just logged in.`;
}
console.log(logingUserMessage("shubham"));

//
function userLogin(username /* ,= "sam" */) {
  //   (username === undefined);
  if (!username) {
    console.log("Please Enter a UserName.");
    return;
  }
  return `${username} just logged in.`;
}
console.log(userLogin());
// console.log(userLogin("Shubham"));

// rest operator
function calculatrCartPrice(...num1) {
  return num1;
}
console.log(calculatrCartPrice(200, 400, 500, 2000));

// object pass in function

const user = {
  username: "Shubham",
  country: "Bharat",
};

function handObject(anyObj) {
  console.log(`Username is ${anyObj.username} From ${anyObj.country}.`);
}
handObject(user);

// Arrays pass in function

const mynewArray = [200, 300, 500, 700];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(mynewArray));
// console.log(returnSecondValue([200, 400, 600, 50]));
