// let arr = ["apple", "banana", "orange"]
// let obj = {
//     name:"Sham",
//     age:21,
//     isEmployee:false,

// }
// // console.dir(arr)

// // console.dir(obj)

// console.table(arr)

// let name = "sam"
// let name1 = "santhosh"
// let name2 = "jeeva"

// console.group("Names")
// console.log(name);
// console.log(name1);
// console.log(name2);

// console.groupEnd();



let num1 = 20;

let num2 = ++num1;

console.log(num1, num2)

let trafficLight = "red"


switch (trafficLight) {
    case "red": console.log("stop");
        break;
    case "yellow ": console.log("wait");
        break;
    case "green ": console.log("go");
        break;
    default: console.log("pay fine");


}



function add(a) {
    return function (b) {
        return function (c) {
            console.log(a + b + c);


        }
    }
}

add(1)(2)(3)


function restOp(...arr) {
    console.log(arr);



}

restOp(1, 2, 3,)


let obj = {
    name: "sam",
    age: 21,
    role: "front end",
    hello: {
        name1: "Sam"

    }
}

let { name, hello: { name1 } } = obj;


console.log(name);
