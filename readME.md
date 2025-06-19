## DSA :-

## 1 - Identify and eliminate duplicate words from the given string, then display the modified string. "big black bug bit a big black dog on his big black nose".

### solution - 
const str = "big black bug bit a big black dog on his big black nose";

let arr = str.split(' ');

let ans = new Map();

for (let i = 0; i < arr.length; i++) {
    if(ans.has(arr[i]))
    {
        let count = ans.get(arr[i]);
        ans.set(arr[i], count + 1);
    }
    else {
        ans.set(arr[i], 1);
    }
}

let result = "";

for (const key of ans.keys()) {
    result = result +" "+ key;
}

console.log(result);

### output - 

big black bug bit a dog on his nose

## 2. Tell the output of - Console.log("2"+2).

### output - 

22.

## 3. Swap KEY : Value
let obj = {
a : 1
b : 2
}

### solution -

let swapped = {};

for (let key in obj) {
  let value = obj[key];
  swapped[value] = key;
}

console.log(swapped);

### output - 

{ '1': 'a', '2': 'b' }

## 4. How will you know if a number given falls under fibonacci series or not?

### solution - 

function isPerfectSquare(x) {
  let s = Math.sqrt(x);
  return s === Math.floor(s);
}

function isFibonacci(n) {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

console.log(isFibonacci(21));
console.log(isFibonacci(22));

### output - 

true
false

## 5. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

### solution - 


let num = '025468';

let arr = num.split("");

let str = "";

for(let i=0; i<arr.length; i++)
{
     if(Number(arr[i]) % 2 === 0 && Number(arr[i+1]) % 2 === 0)
     {
        str += arr[i];
        str = str + '-';
     }else{
        str += arr[i];
     }
    
     
     
}

console.log(str);

### output - 

0-254-6-8

## 6. Using the reduce method, calculate and print the sum of elements in an array.

### solution - 

let num = [5,6,4,8,9,3,10];

let result = num.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
}, 0);

console.log(result);

### output - 

45

## 7. Create a timer whose by default value is 10 and value should decrease by 1 per second.

### solution - 

let num = 10;

let interval = setInterval(() => {
   console.log(num);
   num--;

   if(num < 0)
   {
      clearInterval(interval);
   }
   
}, 1000);

### output - 

10
9
8
7
6
5
4
3
2
1
0

## 8. Give me combined education data along with id and name - 

arr1 = [{age: 8, name: 'Hman', id: 1}, {age: 9, name: 'Iman', id: 2}, {age: 9.5, name: 'Kman', id: 3}, {age: 10, name: 'Jman', id: 4}]

arr2 = [{id: 1, edu: 'BCom'}, {id: 1, edu: 'Diploma'}, {id: 2, edu: 'BSc'}, {id: 2, edu: 'BA'}, {id: 3, edu: 'MSc'}, {id: 4, edu: 'BTech'}]

### solution - 

const eduMap = arr2.reduce((acc, curr) => {
  if (!acc[curr.id]) {
    acc[curr.id] = [];
  }
  acc[curr.id].push(curr.edu);
  return acc;
}, {});


const result = arr1.map(person => {
  return {
    name: person.name,
    id: person.id,
    qualification: eduMap[person.id] || []
  };
});

console.log(result);



### output - 

[{name: 'Hman', id: 1, qualification: [‘BCom’, 'Diploma' ]}]

## 9. let listData = [
{ id: 1, name: 'Discover Music' },
{ id: 2, pid: 1, name: 'Hot Singles' },
{ id: 3, pid: 1, name: 'Rising Artists' },
{ id: 4, pid: 1, name: 'Live Music' },
{ id: 6, pid: 1, name: 'Best of 2017 So Far' },
{ id: 7, name: 'Sales and Events' },
{ id: 8, pid: 7, name: '100 Albums' },
{ id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },
{ id: 10, pid: 7, name: 'CD Deals' },
{ id: 11, name: 'Categories' },
{ id: 12, pid: 11, name: 'Songs' },
{ id: 13, pid: 11, name: 'Best Selling Albums' },
{ id: 14, pid: 11, name: 'New Releases' },
{ id: 15, pid: 11, name: 'Best Selling Songs' },
{ id: 16, name: 'MP3 Albums'},
{ id: 17, pid: 16, name: 'Rock' },
{ id: 18, pid: 16, name: 'Gospel' },
{ id: 19, pid: 16, name: 'Latin Music' },
{ id: 20, pid: 16, name: 'Jazz' },
{ id: 21, name: 'More in Music' },
{ id: 22, pid: 21, name: 'Music' },
{ id: 22, pid: 21, name: 'Music Trade-In' },
{ id: 23, pid: 21, name: 'Redeem a Gift Card' },
{ id: 24, pid: 21, name: 'Band T-Shirts' },
]

### solution - 

const idMap = {};
listData.forEach(item => {
  idMap[item.id] = { ...item };
});


listData.forEach(item => {
  if (item.pid != null && idMap[item.pid]) {
    const parent = idMap[item.pid];
    if (!parent.childs) parent.childs = [];
    parent.childs.push(idMap[item.id]);
  }
});


const result = listData.filter(item => item.pid == null).map(item => idMap[item.id]);

console.log(JSON.stringify(result, null, 2));


### output - 

{ id: 1, name: 'Discover Music', childs:[
{ id: 2, pid: 1, name: 'Hot Singles' },
{ id: 3, pid: 1, name: 'Rising Artists' },
{ id: 4, pid: 1, name: 'Live Music' },
{ id: 6, pid: 1, name: 'Best of 2017 So Far' },
] }

## 10. const arrNum = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],];

Replace with factorial array

### solution - 

const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

const arrNum = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = arrNum.map((inner, index) => {
  const value = inner[2 - index];
  return [factorial(value)];
});

console.log(result); // [ [6], [120], [504] ]




### output - 

[ [ 6 ], [ 120 ], [ 504 ] ]


## 11. Flat an array 

arr = [1,2,3,[5,[6,7],8],9]

### solution - 

const flattened = arr.flat(Infinity);


### output - 
Array = [1,2,3,4,5,6,7,8,9]

## 12. const inventory = 
[
{ name: "asparagus", type: "vegetables", quantity: 5 },
{ name: "bananas", type: "fruit", quantity: 0 },
{ name: "goat", type: "meat", quantity: 23 },
{ name: "cherries", type: "fruit", quantity: 5 },
{ name: "fish", type: "meat", quantity: 22 },
];

### solution - 

const grouped = inventory.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  acc[item.type].push(item);
  return acc;
}, {});

console.log(grouped);

### output - 

{
vegetables: [
{ name: 'asparagus', type: 'vegetables', quantity: 5 },
],
fruit: [
{ name: "bananas", type: "fruit", quantity: 0 },
{ name: "cherries", type: "fruit", quantity: 5 }
],
meat: [
{ name: "goat", type: "meat", quantity: 23 },
{ name: "fish", type: "meat", quantity: 22 }
] }

## 13. Code to give sum of diagonal

[[10,1,20,40,20],
[10,1,21,40,20],
[10,1,40,40,20],
[10,1,30,40,20],
[10,1,60,40,20] ]

### solution - 

const n = matrix.length;
let primary = 0;
let secondary = 0;

for (let i = 0; i < n; i++) {
  primary += matrix[i][i];
  secondary += matrix[i][n - 1 - i];
}

// If you want just the sum of both diagonals:
const total = primary + secondary;

console.log("Primary Diagonal Sum:", primary);
console.log("Secondary Diagonal Sum:", secondary);
console.log("Total Diagonal Sum:", total);

## 14. How to convert 24 hours format to 12 hours in Javascript.

### solution - 

function convertTo12Hour(time24) {
  let [hours, minutes] = time24.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert '0' to '12'
  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

console.log(convertTo12Hour("00:00")); // 12:00 AM
console.log(convertTo12Hour("12:00")); // 12:00 PM
console.log(convertTo12Hour("18:30")); // 6:30 PM


## 15. ![alt text](image.png) 

### solution - 

function changeExtension(filename) {
  // Find the last dot to extract extension
  const lastDotIndex = filename.lastIndexOf(".");

  // If no dot found → No extension present
  if (lastDotIndex === -1) {
    return filename + ".txt";
  }

  const name = filename.slice(0, lastDotIndex);
  const ext = filename.slice(lastDotIndex + 1).toLowerCase();

  // Apply conversion rules
  if (ext === "txt") return name + ".doc";
  if (ext === "doc" || ext === "html") return name + ".pdf";

  // Other extensions → .txt
  return name + ".txt";
}


const files = [
  "Hello.txt",
  "Axelor.doc",
  "X.html",
  "Test",
  "Test.jpg",
  "Test.file.jpg"
];

files.forEach(file => {
  console.log(`${file} => ${changeExtension(file)}`);
});

## 16. Tell me the output and how closure is helping and explain about closures.

![alt text](image-1.png)

### solution - 

a is declared inside function x().

Function y() is also defined inside x(), and it uses variable a.

When y() is called, it remembers the value of a even though a is not declared inside y() — this is exactly what a closure is.


A closure is when a function remembers variables from the place where it was defined, even after that outer function has finished running.

### output - 

output is 7

## 17. Tell me the output: Also tell me the logic why it is not printing 1,2,3,4,5. Hint: Explore about event loop and async programming.

![alt text](image-2.png)

### solution - 

The variable i is declared with let i = 0, and then reused in the for loop.

setTimeout is asynchronous, meaning the callback is scheduled to run after the loop has already completed.

By the time any of the setTimeout callbacks execute, the for loop has completed, and i has reached 6.

All the arrow functions reference the same i, which is now 6.

### output - 

6
6
6
6
6

## 18. What will be the output of the given JavaScript code? How can you modify the code to achieve the desired output using the `let` keyword?I want my output to be 1,2,3,4,5 rather than printing “6” five times, so make the changes also provide the logic behind it.

![alt text](image-3.png)

### solution - 

var is function-scoped, not block-scoped.

All setTimeout callbacks share the same i variable.

By the time the setTimeout functions run (after the loop finishes), i is 6.

after using let keyword in place of var - 

function example() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
example();


### output - 

1
2
3
4
5

## 19. What is the output of below code?

![alt text](image-4.png)

### solution - 

x is declared locally (due to var x = 21) and hoisted, so the global x = 43 is ignored inside random().

Initially, x is undefined.

x++ → undefined++ → results in NaN

console.log(x) → outputs: NaN

Then x = 21 is assigned, but too late for the earlier lines.

### output - 

NaN

## 20. What is the output of below code?

● console.log(0.1 + 0.2 = 0.3);
● console.log(0.1 + 0.2 == 0.3);
● console.log(0.1 + 0.2 === 0.3);

### output - 

1. syntax error
2. false
3. false

## 21. Give output of following code.

![alt text](image-5.png)

### solution - 

var i = 0 declares i using function scope (not block scope).

The loop runs with i = 0, 1, 2, and then stops when i = 3.

Since var is not block scoped, the variable i is still accessible outside the loop.

### output - 

0
1
2
i outside the loop:  3

## 22. Give output of following code.

![alt text](image-6.png)

### output - 

We would get a ReferenceError because let is block-scoped.

## 23. Give output of following code.

![alt text](image-7.png)

### solution - 

var n = 6;

Declares a global variable n and sets it to 6.

console.log(n);

Outputs: 6

foo(6);

Enters the function foo with n = 6.

The if (n == 6) condition is true, so it declares let num = 2; inside the if block.

BUT: let is block-scoped, so num exists only inside the if block.

When console.log(num) is called outside the if block, it throws a ReferenceError.

### output - 

6
Uncaught ReferenceError: num is not defined

## 24. Give output of following code.

![alt text](image-8.png)

### solution - 

var x;
Declares a variable x and initializes it with undefined by default.

console.log(x);
Logs the value of x, which is undefined at this point (assignment happens later).

x = 23;
Assigns the value 23 to x after the console.log.

### output -

undefined

## 25. Give output of following code.

![alt text](image-9.png)

### solution - 

In JavaScript, var declarations are hoisted to the top of their scope but not the assignments. So the code is interpreted as:

var x;       // hoisted declaration
x = 23;
console.log(x);

### output - 

23



