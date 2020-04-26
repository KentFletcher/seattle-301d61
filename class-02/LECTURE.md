# Class 02

## Warm Up
- HTML

## Code Review
- Solution for Compositions
  - Joe's solution!
- Code Challenges
  - forEach method

```js

// Challenge 1

// Write a function named greeting that takes in a string and returns the string in all uppercase letters.
// Then, write a function named speaker that takes in a string and a callback function. The speaker function should return the string in all uppercase letters only by invoking the callback.

const greeting = (word) => {
  // Solution code here...
  return word.toUpperCase();
};

const speaker = (message, callback) => {
  // Solution code here...
  return callback(message);
};

//  Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

const addValues = (arr, value) => {
  // Solution code here...
  arr.push(value); // this is known as a mutation.
};

// How do we know this leads to a mutation?
const myArray = [1,2,3];
addvalue(myArray, 4);

// Then, write a function named addNumbers that takes in four arguments:
//   - A number to be added to an array
//   - An array into which the number should be added
//   - The number of times the number should be added
//   - A callback function to use to add the numbers to the array (Hint: you already defined it)

// Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

// Return the modified array

const addNumbers = (num, arr, times, callback) => {
  // Solution code here...

  for (let i = 0; i < times; i++) {
    callback(arr, num);
  }

  return arr;
};

// CHALLENGE 3
// Write a function named removeOne that takes in a number and an array. If the number divided by three has a remainder of two, pop one element off of the array.

// Hint: you may want to look into the modulo operation.

// Then, write a function named removeElements that takes in an array and a callback. This function should use a for loop to iterate over the array and invoke the callback once for each element in the array.

// Return the modified array.

const removeOne = (num, arr) => {
  // Solution code here...
  if ( num % 3 === 2) {
    arr.pop()// takes one of the end.
  }
};


const removeElements = (arr, callback) => {
  // Solution code here...
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], arr);
  }

  return arr;
};

// Challenge 4
const removeWithForEach = (arr, callback) => {
  // Solution code here...
  // for (let i = 0; i < arr.length; i++) {
  arr.forEach(element => {
    callback(element, arr);
  });

  return arr;
};

// Challenge 5
const removeWithAnon = (arr) => {
  // Solution code here...
  arr.forEach( (element) => {
    if ( element % 3 === 2) {
      arr.pop()// takes one of the end.
    }
  } );

  return arr;
};
```

## Shred Topic: Pass by Reference vs Pass by Value

- What happens when we create a variable?

```js

// our js engine makes a little space in memory
let number = 37;

// our js engine makes another little space in memory, and assigns to the 37 or does it get number?
let secondNumber = number; // gets the value of the refernce number;

number = 38;

console.log(secondNumber) // 38 ? 37
// answer: 37 => Pass by Value

// What about for other data types??

let string = 'Jacob';
let secondString = string; // still passes by value;
// Is this going to be true?

string = 'new jacob';

console.log(secondString); // 'Jacob'

let myArray = [1,2,3];
let myOtherArray = myArray; // Here we are passing by Reference.

// this is thought to be space.

myOtherArray.push(4);
console.log(myArray); // now we have another value in the array we didn't necesarily push to.
```


## JQuery

-  What is jQuery?
   -  A library written in javascript.
   -  Do more in code in less code.
   -  Does a bunch uselful things for DOM manipulation, utility functions.
   -  Very flexible, yet simple, a number of different ways to use.
- How does it work?
  - Getting started?
  - Install manually?
    - download a large js file? groups of smaller js files?
  - Install remotely, using a CDN
    - Add script element to our HTML

```html

<html>
  <head>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
  </head>
  <body>
    <div></div>
    <script src="app.js"></script>
  </body>
</html>
```

```js

console.log($)

```

- Selecting elements (sort of like the DOM)
- Using events (running code when specific events);
  - jquery makes these tasks easy and concise

## AJAX

- What does AJAX stand for?
  - Asychronous Javascript and XML
  - Our code is running simultaneously.
  - When two operations are being calculated at the same time, is this okay?
  - In our JS engine, we sometimes need to code to run in the background.
    - When we make requests, render images, modify a DB, we need our code to not block other code.
    - We need to delay some functionality to run when some other code finishes.


```js

// jquery lets us use promises to handle code that finishes within an AJAX request.
// configure with an object to tell the ajax method what to do
$.ajax('path', configObject).then(callback)

```