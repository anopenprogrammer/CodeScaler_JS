// While Loop
// In JavaScript, a while loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true.

let count = 0; 

while (count < 5) {
  console.log("Count is: " + count);
  count++;
}

// In JavaScript, a do...while loop is another type of loop that is quite similar to the while loop. The key difference between them is that a do...while loop always executes its block of code at least once, and then checks the condition.

let count1 = 0;

do {
  console.log("Count is: " + count1);
  count1++;
} while (count1 < 5);

// The for loop is more complex, but it’s also the most commonly used loop.

for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  alert(i);
}

// Breaking the loop
// Normally, a loop exits when its condition becomes falsy.
// But we can force the exit at any time using the special break directive.

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break; // (*)
  sum += value;
}
alert("Sum: " + sum);

// The continue directive is a “lighter version” of break . It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}

// The "switch" statement
// A switch statement can replace multiple if checks

let a = 2 + 2;
switch (a) {
case 3:
alert( 'Too small' );
break;
case 4:
alert( 'Exactly!' );
break;
case 5:
alert( 'Too large' );
break;
default:
alert( "I don't know such values" );
}
