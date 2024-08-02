// For...of Loop
// The for...of loop in JavaScript is a convenient way to iterate over iterable objects like arrays, strings, maps etc. It provides a cleaner syntax compared to traditional for loops, especially when dealing with arrays.

// Iterating over Arrays:

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// apple
// banana
// orange

// Iterating over Strings:

const str = "hello";

for (const char of str) {
  console.log(char);
}

// h
// e
// l
// l
// o

// For...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object.

// Iterating over Object Properties:

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}

// name: John
// age: 30
// city: New York

// Iterating over Arrays:

const fruitss = ["apple", "banana", "orange"];

for (const index in fruitss) {
  console.log(index + ": " + fruits[index]);
}

// 0: apple
// 1: banana
// 2: orange

// Foreach Loop
// In JavaScript, the forEach() method is a higher-order function available on arrays that allows you to iterate over each element of an array and perform a specified action for each element.

// Accessing Index:

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(`Element at index ${index}: ${number}`);
});

// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5

// Using Arrow Function:

const numberss = [1, 2, 3, 4, 5];

numberss.forEach(number => {
    console.log(number);
});

// 1
// 2
// 3
// 4
// 5
