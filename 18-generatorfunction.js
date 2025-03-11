// generator function

/*
A generator function in JavaScript is a special kind of function that can pause and continue its work. Unlike regular functions that run from start to finish, a generator function can stop in the middle and then start again where it left off. You write a generator function using function*, and you pause it using the yield keyword.
*/

function* generatorFunction(){
    yield "one"
    yield "two"
    yield "three"
    return "four"
}


let generator = generatorFunction()
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

