// Logical operators
// There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

// || (OR)
// The “OR” operator is represented with two vertical line symbols:

result = a || b;

// There are four possible logical combinations:
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

// && (AND)
// The AND operator is represented with two ampersands && :

result = a && b;

// In classical programming, AND returns true if both operands are truthy and false otherwise:

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

// An example with if :

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}

// Just as with OR, any value is allowed as an operand of AND

// ! (NOT)
// The syntax is pretty simple:
result = !value;
alert( !true ); // false
alert( !0 ); // true