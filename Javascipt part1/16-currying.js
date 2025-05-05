function add(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
            
        }
    }
}
        // chaining call
add(10)(20)(20);