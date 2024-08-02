// We know many operators from school. They are things like addition + ,multiplication * ,subtraction - ,and so on.

// Terms: “unary”, “binary”, “operand”

// Before we move on, let’s grasp some common terminology.
// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2 . Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let x = 1;
x = -x;
console.log(x);

// An operator is binary if it has two operands. The same minus exists in binary form as well:

let z = 1,
  y = 3;
console.log(y - z);

// The binary plus would add them as strings:

let apples = 2;
let oranges = 3;
alert(apples + oranges); // "23", the binary plus concatenates strings

// If we want to treat them as numbers, we need to convert and then sum them:

let appless = "2";
let orangess = "3";
// both values converted to numbers before the binary plus
alert(+appless + +orangess); // 5

// Addition
// Subtraction
// Multiplication
// Remainder
// Exponentiation **
// Increment/decrement

//2. Bitwise operators

// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
// These operators are not JavaScript-specific. They are supported in most programming languages.

// The list of operators:
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )

a = 12 & 7;

// Comma Operator
// The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
// The comma operator allows us to evaluate several expressions, dividing them with a comma , .
// Each of them is evaluated but only the result of the last one is returned.

let a = (1 + 2, 3 + 4);
alert(a); // 7 (the result of 3 + 4)

// The postfix and prefix forms 

let ab = 2;
let xq = 1 + (ab *= 2);
