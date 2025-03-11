// Higher Order Methods - sort(), some() & every() in Js

let arr = [2, 1, 10, 6, 32, 44, 8]

let sortArr = arr.sort((a, b) => {
    return a - b
})

console.log(sortArr);


// some its a logical OR =>>>> if some value true it will give true 

let arr1 = [2, 2, 3, 4, 5]

let someVal = arr1.some((ele, index, arr) => {
    return ele%2==0
 })

 console.log(someVal);


// every its a logical AND =>>>> if every value true it will give true 
let everyValue = arr1.every((ele)=>{
    return ele%2==0
})
console.log(everyValue);

