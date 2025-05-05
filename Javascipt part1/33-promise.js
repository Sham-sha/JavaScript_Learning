let newPromise = new Promise((resolve, reject) => {

    let dataReceived = true;

    if (dataReceived) resolve("Data received")

    else reject("Data not received")

})

newPromise.then((message) => {
    console.log("success" + message);

}).catch((error) => {
    console.error("failure" + error)

}).finally(() => {
    console.log("end");

})