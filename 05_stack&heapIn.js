// Stack (permitive), Heap (Non-primitive)

// Stack

let myYoutubeName = "Code-With-Shubham";

let anothername = myYoutubeName;
anothername = "Chai-Aur-Code";

console.log(myYoutubeName);
console.log(anothername);

// Heap

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "shubham@google.com";

console.log(userOne.email);
console.log(userTwo.email);
