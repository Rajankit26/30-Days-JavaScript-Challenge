// Day 4
// Activity1
// Task1
for(let i = 1; i <= 10 ; i++){
    console.log(i);
}

// Task2
for(let i = 1 ; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

// Activity 2
// Task3
let i = 1 , sum = 0;
while(i <= 10){
    sum += i;
    i++;
}
console.log(sum);

// Task5
let a = 1;
do{
    console.log(a);
    a++;
}
while(a <= 5)
// Task4
let nums = 10;
while (nums > 0){
    console.log(nums);
    nums--;
}
// Task6
function factorial(num){
    let fact = 1;
    let num1 = num;
    do{
        fact *= num1;
        num1--;
    }
    while(num1 > 0){
        console.log(`${fact}`);
    }
}
let n = 5;
factorial(n);

// Task7
for(let i = 1 ; i < 6; i++){
    let star = "";
    for(let j = 1 ; j <= i; j++){
        star += '*';
    }
    console.log(star);
}

// Task 8
for(let i = 1 ; i <= 10; i++){
    if(i == 5)continue;
    console.log(i);
}
// Task 9
for(let i = 1; i< 11; i++){
    if(i == 7)break;
    console.log(i);
}