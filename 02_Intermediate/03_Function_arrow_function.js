// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
// It’s called “arrow functions”, because it looks like this:

// Let’s see a concrete example:

let sum = (a, b) => a + b;

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
// For example:

let double = (n) => n * 2;

// Multiline arrow functions
// Sometimes we need something a little bit more complex, like multiple expressions or statements. It is also possible, but we should enclose them in curly braces. Then use a normal return within them.
// Like this:
let sum1 = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
alert( sum(1, 2) );