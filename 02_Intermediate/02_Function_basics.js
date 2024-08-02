// To create a function we can use a function declaration.

function showMessage() {
  alert("Hello everyone!");
}

// The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses

function showMessage() {
  alert("Hello everyone!");
}
showMessage();
showMessage(); //function call

// Local variables
// A variable declared inside a function is only visible inside that function.

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert(message);
}

// Outer variables
// A function can access an outer variable as well, for example:

let userName = "John";
function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}
showMessage(); // Hello, John

// The function has full access to the outer variable. It can modify it as well.

let userName1 = "John";
function showMessage() {
  userName1 = "Bob"; // (1) changed the outer variable
  let message = "Hello, " + userName;
  alert(message);
}
alert(userName1); // John before the function call
showMessage();
alert(userName1); // Bob, the value was modified by the function

// The outer variable is only used if there’s no local one.
// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName . The outer one is ignored

// Parameters
// We can pass arbitrary data to functions using parameters (also called function arguments) .
// In the example below, the function has two parameters: from and text .
function showMessage(from, text) {
  // arguments: from, text
  alert(from + ": " + text);
}
showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)

// Default values
// If a parameter is not provided, then its value becomes undefined .
// If we want to use a “default” text in this case, then we can specify it after = :

function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}
showMessage("Ann");

// Returning a value
// A function can return a value back into the calling code as the result.
// The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert(result); // 3

// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
// For instance, functions that start with "show" usually show something.

// Function starting with…
// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

// Examples of such names:
// showMessage(..) // shows a message
// getAge(..) // returns the age (gets it somehow)
// calcSum(..) // calculates a sum and returns the result
// createForm(..) // creates a form (and usually returns it)
// checkPermission(..) // checks a permission, returns true/false

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')