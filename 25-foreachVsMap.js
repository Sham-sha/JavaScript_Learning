let fruits = ['apple', 'orange', 'banana', 'lemon'];

// forEach



fruits.forEach(printFruits)

function printFruits(fruits, index, totalArray, i) {
    console.log(fruits, index + 1, totalArray,);

}

fruits.forEach((fruit, index,arr) => {
    console.log(index + 1, fruit,arr[index+1])
})


// map

let fruitsObj = fruits.map((fruit, id) => {
    return {fruit}

})

console.log(fruitsObj);



