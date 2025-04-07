let person = {
    name: "Sham",
    age: 21
}

// console.log(person.name)

// Object.create 

let Obj = Object.create(person)
Obj.location = "Tamil Nadu"

console.log(Obj.__proto__);


// Object.assign 

let person1 = {
    id: "SHAM1234",
    name: "Sham"

}

Object.assign(person1, { role: "React Dev", salary: 25000 })

console.log(person1);


let concat1 = {
    age:"21",
    role:"fullstack"
}

let concat2 = {
    name:"santhosh",
    age:22
}

console.log({...concat1,...concat2});


let arr = [1,2,3,4,]
let arr2 = [10,20,30]

let Obj={...arr2}

console.log(Obj);

// Object.entries 

let employee = {
    eName:"sham",
    eRole:"React developer"
}

let multiArr = Object.entries(employee)

console.log(multiArr);


// Object.key 

let onlyKeys = Object.keys(employee)
console.log(onlyKeys);


let onlyValues = Object.values(employee)
console.log(onlyValues)
