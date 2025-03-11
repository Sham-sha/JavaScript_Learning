// Self Invoked Function & Closure

// without calling the function will work

function normalFunction() {
    console.log("Execute whenever i call");

}

normalFunction();

// This type of function is also called an IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("this function will execute without calling");

})();

// 1

(function (a, b) {
    console.log(`add self invoke function ${a + b}`);

})(10, 20);

// 2
(function (name) {
    console.log(`Hai this is ${name}`)
})("sam");

// 3

(function(whoIsThis){
    console.log(`i dont want call back -${whoIsThis}`);
    
})("invoke function")


// Closure

function outerFunction(){
    let outerVariable = "Im outer scope"
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction()
}

outerFunction()