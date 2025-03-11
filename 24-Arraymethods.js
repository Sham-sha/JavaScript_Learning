

let arr = [100, 200, 300, 400];


let popValue = arr.pop()

console.log(arr);


let popValue2 = arr.pop()


console.log(popValue, arr, popValue2);

arr.push("sam")


console.log(arr);

let arr1 = []
for (let i = 1; i < 10; i++) {
    arr1.push(i)
}
console.log(arr);



// Splice method 

let newArr = [10, 20, 30, 40, 50]


// Splice(Start, count , items)
newArr.splice(-1,0,5,6)

console.log(newArr);
