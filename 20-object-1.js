

// Object declaration 

let newObj = new Object();

let newObj1 = {}

newObj.name = "sham"
newObj.age = 21;

console.log(newObj);


let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};
user.isAdmin = true;
delete user.age;

user["like birds"] = "yes"


// The "for..in" loop

let user = {
    name: "John",
    age: 30
  };
  
//   let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  


  let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone =structuredClone(user)

  clone.sizes.height = 12
  clone.name = "Sam"

  console.log(user);
  
  console.log(clone);
  

  let x={
    name:"Sam",
    say:"hello"
  }

  let y ={
    role:"developper"

  }

  console.log({...y,...x});
  

  let person = { name: "Sham", age: 21, role: "Developer" };

  console.log(Object.keys(person));
  
  console.log(Object.values(person));

  console.log(Object.entries(person))



  