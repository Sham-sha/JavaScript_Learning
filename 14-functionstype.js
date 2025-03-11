// Named function

function add(a, b) {
    console.log(a + b);

}
add(12, 33)


// Anonyms function 

let anonyms = function () {
    console.log("this is anonyms function");

}
anonyms()


// Arrow function 

let arrow = () => {
    console.log("this is arrow function");
}
arrow()


// Higher order function

function function1() {
    console.log("I am higher order function");
}

function function2() {
    console.log("I am call back function");
}

function1(function2())


/* when we are pass the function as a value for parameter is called call back function 

*/

function addition(callback, a, b) {
    console.log(a + b);
    callback(20, 10)

}

function subtract(num1, num2) {
    console.log(num1 - num2);

}

addition(sub, 100, 200)