// Most of the time, a JavaScript application needs to work with information. Here are two examples:

// 1. An online shop – the information might include goods being sold and a shopping cart.
// 2. A chat application – the information might include users, messages, and much more.

// Variables are used to store this information.

//Variables

// A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

// To create a variable in JavaScript, use the let keyword.

//1. Let Keyword

// Way 1
let message;
message = 'Hello';

// Way 2
let message1 = 'Hello!';

// We can also declare multiple variables in one line:
let user = 'John', age = 25, message2 = 'Hello';

// The multiline variant is a bit longer, but easier to read:
let user1 = 'John';
let age1 = 25;
let message3 = 'Hello';

// In older scripts, you may also find another keyword: var instead of let :
var message4 = 'Hello';

// We can also change it as many times as we want:
message = 'Hello!';
message = 'World!'; // value changed

// Variable naming

// There are two limitations on variable names in JavaScript:
// 1. The name must contain only letters, digits, or the symbols $ and _ .
// 2. The first character must not be a digit.

// When the name contains multiple words, camelCase is commonly used

// Reserved names

// There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

// For example: let , class , return , and function are reserved.
// The code below gives a syntax error:

// let let = 5; 
// let return = 5; 

//2. Const Keyword

// To declare a constant (unchanging) variable, use const instead of let :
const myBirthday = '18.04.1982';

// Uppercase constants
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// Benefits:
// COLOR_ORANGE is much easier to remember than "#FF7F00" .
// It is much easier to mistype "#FF7F00" than COLOR_ORANGE .
// When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00 .

// Some good-to-follow rules are:
// Use human-readable names like userName or shoppingCart .
// Stay away from abbreviations or short names like a , b , c , unless you really know what you’re doing.

// HOMEWORK

// 1. Declare two variables: admin and name .
// 2. Assign the value "John" to name .
// 3. Copy the value from name to admin .
// 4. Show the value of admin using alert (must output “John”).
// 5. Create a variable with the name of our planets. How would you name such a variable?
// 6. Create a variable to store the name of a current visitor to a website. How would you name that variable?

