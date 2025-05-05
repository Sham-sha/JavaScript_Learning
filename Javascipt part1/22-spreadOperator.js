// The spread and rest operators (...) are special symbols in JavaScript that make working with lists (like arrays) and objects easier. They look the same, but they do different things

let hobbies = ["cricket", "football", "basketball"]

let hobbies1 = ["reader", "writer"]

let newArr = [...hobbies, ...hobbies1]

console.log(newArr)


// rest parameter rest operator

function restOperator(...arr) {

    console.log(arr);

}
restOperator(1, 2, 3, 4, 5)


let array = [10, 20, 30, 40]
let array1 = [10, 20, 30, 44]

let arr2 = [...array, ...array1]
console.log(...array);


let obj = {
    name: " Sham ",
    age: 21
}

console.log(obj);
