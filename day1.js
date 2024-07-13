// Chai and Code
// Day 1: Variables and Data Types

// Tasks/Activities:
// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 26;
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let myName = "Ankit";
console.log(myName);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const value = true;
console.log(value);

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let age = 21;
console.log(`Type of age : ${age} is a ${typeof age}`);

let month = "July";
console.log(`Type of month :${month} is a ${typeof month}`);

let isSorted = false;
console.log(`Type of isSorted: ${isSorted} is a ${typeof isSorted}`);

let Animal = {
    color : "white",
    legs : 4,

    speak(){
        console.log("Speaking");
    }
};
console.log(Animal);
console.log(`Type of Animal is an ${typeof Animal}`);

let nameAndAge = ["Aditya",22,"Raju",16,"MOhan",11];
console.log(nameAndAge);
console.log(`Type of nameAndAge is ${typeof nameAndAge}`);

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let color = "Red";
console.log(color);
color = "blue";
console.log(color);

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const myAge = 33;
console.log(myAge);
myAge = 21;
console.log(myAge);

// Day1 completed