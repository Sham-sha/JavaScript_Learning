let userProfile = {
    // primitive value 
    userName: ["Sam", "Jeeva", "Santhosh"],
    age: [21, 21, 19],
    // non primitive value 
    eat: function () {
        console.log("I am going to eat ice cream");

    },

    sleep: function () {
        return "I'll sleep at 1am"
    }
}

// if we want to access we should put dot 

console.log(userProfile.userName, userProfile.age);

userProfile.eat();

console.log(userProfile.sleep());

console.table(userProfile);

let vehicle = {
    "vehicleType": "four-Wheeler",
    "price": 20000,
    fuelType: "petrol"
}


console.log(vehicle["vehicleType"]);
console.log(vehicle["fuelType"]);
console.log(vehicle.vehicleType);


// Shorthand Assigned Property 

let uName = "Sam";
let age = 21;

let Person = {
    uName,
    age
}

console.log(Person.uName);


// Dynamic property 

let dynamicProperty = "employeeId"

