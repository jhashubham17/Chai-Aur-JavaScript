// - call

function setUserName(username) {
  // complex DB calls

  this.username = username;
  //   console.log("called");
}

function createUser(username, email, password) {
  //   setUserName(username);
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chaiWala", "chaiWala@google.com", "12345");

console.log(chai);
