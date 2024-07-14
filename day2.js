// Day 2: Operators

// Tasks/Activities:
// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
let a = 9;
let b = 5;
let sum = a + b;
console.log(sum);

// Task 2: Write a program to subtract two numbers and log the result to the console.
let diff = a - b;
console.log(diff);

// Task 3: Write a program to multiply two numbers and log the result to the console.
let multiplication = a * b;
console.log(multiplication);

// Task 4: Write a program to divide two numbers and log the result to the console.
let division = a / b;
console.log(division);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = a % b;
console.log(remainder);

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
sum += 77;
console.log(sum);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
diff -= 11;
console.log(diff);

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
a = 50;
b = 90;
console.log(a > b);
console.log(a < b);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(a >= b);
console.log(a <= b);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
a = 10;
b = '10';
console.log(a == b);
console.log(a === b);

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if(true && true){
    console.log("both should be true");
}
else{
    console.log("Otherwise else statement will run");
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if(true || false){
    console.log("Only one should be true");
}
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
if(6 != 8){
    console.log(true);
}

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
let p = -55;
if(p > 0 ? console.log("Positive") : console.log("Negative"));


// Day2 completed