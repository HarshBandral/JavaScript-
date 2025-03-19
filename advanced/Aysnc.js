// synchronous code - executes line by line , blocking further execution until each line is completed, while
// asynchronous code - allows other code to continue executing while it wait for an aysnchronous operation to complete


// example of asynchronous code
const fun2 = () =>{
    setTimeout(() => {// async operation 
        console.log("fun2 start and ends");// this code will go in web API for 2000 ms until then fun1 remaining code will be executed
    }, 2000);
};

const fun1 = () => {
    console.log("fun1 starts");
    fun2();
    console.log("fun1 ends");
};
fun1();