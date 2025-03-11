// Arithmetic Operators
console.log(5 + 2);  // Addition: Outputs 7
console.log(5 - 2);  // Subtraction: Outputs 3
console.log(5 * 2);  // Multiplication: Outputs 10
console.log(5 / 2);  // Division: Outputs 2.5
console.log(5 % 2);  // Modulus (Remainder): Outputs 1
console.log(5 ** 2); // Exponentiation: Outputs 25

let a = 5;
a++;                 // Increment: Adds 1 to the variable (post-increment)
console.log(a);      // Outputs 6

a--;                 // Decrement: Subtracts 1 from the variable (post-decrement)
console.log(a);      // Outputs 5

// Assignment Operators
let x = 10;          // Assigns 10 to x
x += 5;              // Add and assign: x = x + 5
console.log(x);      // Outputs 15

x -= 3;              // Subtract and assign: x = x - 3
console.log(x);      // Outputs 12

x *= 2;              // Multiply and assign: x = x * 2
console.log(x);      // Outputs 24

x /= 4;              // Divide and assign: x = x / 4
console.log(x);      // Outputs 6

x %= 2;              // Modulus and assign: x = x % 2
console.log(x);      // Outputs 0

// Comparison Operators
console.log(5 == '5');   // Equal to: true (compares value, not type)
console.log(5 === '5');  // Strict equal to: false (compares value and type)
console.log(5 != '5');   // Not equal to: false (compares value, not type)
console.log(5 !== '5');  // Strict not equal to: true (compares value and type)

console.log(5 > 3);      // Greater than: true
console.log(5 < 3);      // Less than: false
console.log(5 >= 3);     // Greater than or equal: true
console.log(5 <= 3);     // Less than or equal: false

// Logical Operators
console.log(true && false);  // Logical AND: false
console.log(true || false);  // Logical OR: true
console.log(!true);          // Logical NOT: false

// String Operators
let str = "Hello";
str += " World!";            // Concatenation and assign
console.log(str);            // Outputs: "Hello World!"

// Type Operators
console.log(typeof 42);       // typeof: Outputs "number"
console.log(typeof "hello");  // typeof: Outputs "string"

console.log([] instanceof Array);  // instanceof: true (checks if it's an instance of Array)

// Ternary Operator
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);          // Outputs "Yes"

// Nullish Coalescing Operator
let username = null;
console.log(username ?? "Guest");  // Outputs "Guest" (since username is null)

// Optional Chaining Operator
let user = { profile: { name: "Alice" } };
console.log(user?.profile?.name);  // Outputs "Alice"
console.log(user?.address?.city);  // Outputs undefined (safe access, no error)


