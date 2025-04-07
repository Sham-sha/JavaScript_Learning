/*
array data structure

In JavaScript, an array is a way to store a list of items in a single variable. 
Each item in the array has a position called an index, and you can access each item by its index number.

primitive - store single value
non-primitive - store multiple value 
It can hold homogeneous and heterogenous



let numbers = ["one", "two", "three", "four", 1, true, NaN, null, { No: 1 }]

for (key of numbers) {
    console.log(key);

}

for (key in numbers) {
    console.log(key);
}


// Array constrictor

let newArray = new Array();

newArray[2] = "two"

console.log(newArray);

// Dense Array in Javascript

let num = [1004, 1008, 1012, 1016, 1021] // contiguous memory location

// formula = baseaddress +(index*length) ///////////

let num1 = [10,20,,40,,60] // hash table or hash map 
console.log(num1); 



// Sparse Array in Javascript


*/

let arr = [1,2,3,4,5]

let newArr = arr.slice(1,arr.length)

console.log(newArr);
