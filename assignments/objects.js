// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:


// ** My code starts here **


const interns = {
  intern1 : {
    "id": 1,
    "name": "Mitzi",
    "email": "mmelloy0@psu.edu",
    "gender": "F"
  },
  intern2 : {
    "id": 2,
    "name": "Kennan",
    "email": "kdiben1@tinypic.com",
    "gender": "M"
  },
  intern3 : {
    "id": 3,
    "name": "Keven",
    "email": "kmummery2@wikimedia.org",
    "gender": "M"
  },
  intern4 : {
    "id": 4,
    "name": "Gannie",
    "email": "gmartinson3@illinois.edu",
    "gender": "M"
  },
  intern5 : {
    "id": 5,
    "name": "Antonietta",
    "email": "adaine5@samsung.com",
    "gender": "F"
  }
}

console.log(interns)


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

// Kennan's ID

// Keven's email

// Gannie's name

// Antonietta's Gender


// ** My code starts here **
console.log(interns.intern1.name) // Mitzi's name
console.log(interns.intern2.id) // Kennan's ID
console.log(interns.intern3.email) // Keven's email
console.log(interns.intern4.name) // Gannie's name
console.log(interns.intern5.gender) // Antonietta's Gender

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

// ** My code starts here **
interns.intern2.speak = function () { return "Hello, my name is " + this.name + "!"}
console.log(interns.intern2.speak())

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));


// ** My code starts here **
interns.intern5.multiplyNums = function (num1, num2) { return num1 * num2}
console.log(interns.intern5.multiplyNums(2,2))

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
