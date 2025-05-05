// Higher Order Methods - reduce() method in Javascript

// it will reduce the array and give one single vale 

let arr = [1000, 2000, 4000, 6000, 3000]

let totalVal = arr.reduce((acc, currentElement, index, array) =>
                 { return acc+currentElement }, 0)

console.log(totalVal);

