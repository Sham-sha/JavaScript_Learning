fetch("https://fakestoreapi.com/products")
    .then((res) => {
       return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
        
    })


