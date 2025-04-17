// function defination
function userDetails(username, experience) {
  return `**USER DETAILS**
    USERNAME:${username}
    EXPERIENCR:${experience}`;
}
// call the function
console.log(userDetails("Shyam", 5));

// FUNCTION EXPRESSION
let greeting = function (user) {
  console.log(`Hello ${user}, Have a nice day`);
}; // RHS--> anonymous Function

greeting("Sheetal");

(function (a, b, c) {
  console.log(`The sum of ${a} ${b} ${c} is ${a + b + c}`);
})(1548, 3654, 78542);

// ARROW FUNCTION
let cube = (num) =>
  console.log(`The cube of the number ${num} is: ${num ** 3}`);

cube(15);

// Arrow function are differnt from regular 
