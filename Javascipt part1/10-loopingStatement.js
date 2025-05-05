// for loop

/*

for(initialization ; condition ; counter ){

}
*/


for(i = 1 ; i<=15;i++){
    // if(i%2==0) console.log(i)
}


// While loop 

/*
    initialization
    while(condition){
        statement;
        counter
    
    }
*/

let num = 1234;
let sum = 0
while(num>0){
    let last = num%10
    num = parseInt(num/10)
    sum +=last
}

console.log(sum);

// Do while

let number = 11;

do{
    console.log(number)
    number--
}
while(number>=10) 

let num1 = 20
for(let i = 1;i<=num1;i++ ){
    if(i%2===0){
        if(i===10){
            // break;
            continue;
        }
        console.log(i);
    }

}