// Sometimes, we need to perform different actions based on different conditions.
// To do that, we can use the if statement and the conditional operator ? , that’s also called a “question mark” operator.

// The “if” statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true , executes a block of code.

// For example:
let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);
if (year == 2015) alert("You are right!");

// If we want to execute more than one statement, we have to wrap our code block inside curly braces:
if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}

// Boolean conversion
// if (0) { // 0 is falsy
//     ...
//     }

// if (1) { // 1 is truthy
//     ...
//     }

// The “else” clause
// The if statement may contain an optional “else” block. It executes when the condition is false.

let year1 = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);
if (year == 2015) {
  alert("You guessed it right!");
} else {
  alert("How can you be so wrong?"); // any value except 2015
}

// Several conditions: “else if” ladder
let year2 = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);
if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}

// Conditional operator ‘?’
let result = condition ? value1 : value2;

// Multiple ‘?’
let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, there!' :
(age < 18) ? 'Hello!' :
(age < 100) ? 'Greetings!' :
'What an unusual age!';