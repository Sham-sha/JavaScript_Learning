let fruits = ['apple', 'orange', 'banana', 'lemon'];

// forEach

fruits.forEach((fruit, index, arr) => {
    console.log(index + 1, fruit, arr[index + 1])
})


fruits.forEach(printFruits)

function printFruits(fruits, index, totalArray) {
    console.log(fruits, index + 1, totalArray,);

}



// map
let fruits1 = ['apple', 'orange', 'banana', 'lemon'];

let fruits1Obj = fruits1.map((fruit, id) => {
    return { fruit }

})

console.log(fruits1Obj);



