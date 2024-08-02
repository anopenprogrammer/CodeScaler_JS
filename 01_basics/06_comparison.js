// Comparisons

// We know many comparison operators from maths:
// Greater/less than: a > b , a < b .
// Greater/less than or equals: a >= b , a <= b .
// Equals: a == b (please note the double equals sign = . A single symbol a = b would mean an assignment).
// Not equals. In maths the notation is ≠ , but in JavaScript it’s written as an assignment with an exclamation sign before it: a != b .

// Boolean is the result

// String comparison

// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
// In other words, strings are compared letter-by-letter.
// For example:
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true

// Not a real dictionary, but Unicode order

// Comparison of different types

// When comparing values of different types, JavaScript converts the values to numbers.
// For example:
alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0 .
// For example:
alert(true == 1); // true
alert(false == 0); // true

// A funny consequence

// It is possible that at the same time:
// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.
// For example:

let a = 0;
alert(Boolean(a)); // false
let b = "0";
alert(Boolean(b)); // true
alert(a == b);

// Strict equality
// A strict equality operator === checks the equality without type conversion.

alert(0 == false); // true
alert( 0 === false ); // false, because the types are different

alert( null === undefined ); // false
alert( null == undefined ); // true

// null/undefined are converted to numbers: null becomes 0 , while undefined becomes NaN .

// There is also a “strict non-equality” operator !==

// HOMEWORK

// What will be the result for these expressions?
// 5 > 4
// "apple" > "pineapple"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"

