// charAt 

let str = "Hello World";
// console.log(str.charAt(0))


// charCodeAt  
let str1 = "JavaScript";
// console.log(str1.charCodeAt())


// concat

let str2 = str1.concat(` ${str}`)
// console.log(`${str2}`);

// includes

let str3 = "Singles Threaded";

// console.log(str3.includes("S"))

// console.log(str3.includes("S",6))


// index of 

let str4 = "Sham"

// console.log(str4.indexOf('A'));


// repeat 

let str5 = "Sam"
let str5Repeat = str5.repeat(2)
console.log(str5Repeat);
  

// replace replaceAll
let str6 = "Js is a Js Script language"
console.log(str6.replace("Js","Ps"))
console.log(str6.replaceAll("Js","Ps"))

// slice 

let str7 = "Single Thread hai nan";
console.log(str7.slice(0,str7.length-4))

console.log(str7.split(" ",1))


// startsWith

let Words = "i am sam from chennai";
console.log(Words.startsWith("i",1))

// startsWith

let Words1 = "i am Sam from chennai";
console.log(Words1.endsWith("i",1))

console.log(Words1.toLowerCase())
console.log(Words1.toUpperCase())

let Trim = "   Sam  "

console.log(Trim.trim())