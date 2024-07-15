// Tasks/Activities:

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num1 = 60;
if(num1 > 0){
    console.log("Positive");
}
else{
    console.log("Negative");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 15;
if(age >= 18){
    console.log("Person is eligible to vote")
}
else{
    console.log("Person is not eligible to vote");
}

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 5 , b = 9 , c = 8;
if(a > b && a > c){
    console.log(`${a} is the largest no`);
}
else{
    if(b > c){
        console.log(`${b} is the largest no`);
    }
    else{
        console.log(`${c} is the largest no`);
    }
}

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 5;
switch(day){
    case 1:
    console.log("Sunday");
    break;
    case 2:
    console.log("Monday");
    break
    case 3:
    console.log("Tuesday");
    break
    case 4:
    console.log("Wednesday");
    break
    case 5:
    console.log("Thursday");
    break
    case 6:
    console.log("Friday");
    break
    case 7:
    console.log("Saturday");
    break
    default:
        console.log("ENter no between 1 - 7");
}
// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 53;

if (score <= 100 && score >= 91) {
  console.log("A1");
} else if (score <= 90 && score >= 81) {
  console.log("A2");
} else if (score <= 80 && score >= 71) {
  console.log("B1");
} else if (score <= 70 && score >= 61) {
  console.log("B2");
} else if (score <= 60 && score >= 51) {
  console.log("C1");
} else if (score <= 50 && score >= 41) {
  console.log("C2");
} else if (score <= 40 && score >= 33) {
  console.log("D");
} else if (score <= 32 && score >= 21) {
  console.log("E1");
} else {
  console.log("E2");
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num4 = 20;

let isOdd = num4 % 2 == 0 ? false : true;

if (isOdd) {
  console.log("Number is Odd");
} else {
  console.log("Number is Even");
}
// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2098;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Year is a leap year");
} else {
  console.log("year is not leap year");
}
