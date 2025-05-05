// Array Methods - Concat, Slice, Flat & Fill in Javascript

// Concat
let arr = [1, 2, 3, 4]

let arr1 = [4, 6, 7, 8]

let concatArr = arr.concat(arr1)

console.log("ConcatArr:", concatArr);

// Slice
let sliceArr = [10, 20, 30, 40, 50, 60]

let sliceArr1 = sliceArr.slice(1, 3)

console.log("sliceArr1 :", sliceArr1);

// Flat method

let flatArr = [10, 20, 30, 40, 50, 60, [10, 10, [20, 20]]]

let flatArr1 = flatArr.flat(Infinity)

console.log(flatArr1);


//Fill method

let fillArr = [1, 2, 3, 4, 6, 8];

fillArr.fill("Sam",1,5)

console.log(fillArr);

