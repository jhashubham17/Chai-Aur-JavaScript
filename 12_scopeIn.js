// scope

// vac c = 300

let a = 100;

if (true) {
  let a = 10;
  //   const b = 20;
  var c = 30;
  console.log("Inner:", a);
}

console.log("Outer:", a);
// console.log(b);
// console.log(c);

//

function one() {
  const username = "shubham";

  function two() {
    const website = "youtube";

    console.log(username);
  }
  //   console.log(website);

  two();
}
one();

//

if (true) {
  const username = "shubham";

  if (username === "shubham") {
    const website = " youTube";
    console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// Important

console.log(addone(5));
function addone(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
