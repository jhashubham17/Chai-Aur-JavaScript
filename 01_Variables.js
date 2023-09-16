const accountId = 124680;
let accountEmail = "sjha@google.com";
var accountPassword = "123456";
accountCity = "Delhi";
let accountUserName;

// accountId = 235790  -- Not allowed

accountEmail = "jha@google.com";
accountPassword = "234567";
accountCity = "bengaluru";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountUserName,
]);

/*
prefer not to use var

-because of issue in block scope and functional scope

*/
