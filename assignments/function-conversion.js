// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();


// ** My code starts here **
let myFunction = () => console.log("Function was invoked!");
// myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");


// ** My code starts here **
let anotherFunction = (param) =>  param;
// console.log(anotherFunction("Example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);


// ** My code starts here **
let add = (param1, param2) => param1 + param2;
console.log(add(1,1));


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);


// ** My code starts here **
let subtract = (param1, param2) => param1 - param2;
console.log(subtract(5,2));


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
