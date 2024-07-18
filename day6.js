// DAy6
let arr =[1,2,3,4,5];
console.log(arr);

// Task2
let first = arr[0];
console.log(first);
let n = arr.length;
let last = arr[n - 1];
console.log(last);
// task3
let num1 = 6;
arr.push(num1);
console.log(arr);

// Task4
arr.pop();
console.log(arr);

// Task5
arr.shift();
console.log(arr);

// TAsk6
arr.unshift(1);
console.log(arr);

// Task7
let double = arr.map(num => num * 2);
console.log(double);

// TAsk 8
let even = arr.filter(num => num % 2 === 0);
console.log(even);

// Task9
let sum = arr.reduce((acc,currentVal) =>acc + currentVal,0);
console.log(sum);

// Task10;
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
}

// Task 11
arr.forEach(element =>(console.log(element)));

// Task12
let twoDArray= [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
twoDArray.forEach(element =>(console.log(element)));

// Task13
console.log(`${twoDArray[0][0]}`);
console.log(`${twoDArray[2][0]}`);
console.log(`${twoDArray[0][2]}`);
console.log(`${twoDArray[1][1]}`);