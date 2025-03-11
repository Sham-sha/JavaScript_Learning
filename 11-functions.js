let person1 = {
    name: "Sam",
    age: 21
}

function printUserName(name, age) {
    console.log(`Hello ${name} your are${age} years old `);

}
printUserName(person1.name, person1.age)



let employeeId ;  // = "IFC123456"

let ID = employeeId || "GUEST"

console.log(ID);

function age(age = 18) {
    console.log(age);
}
age()