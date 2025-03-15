// function expression  

var result = function sum(a,b){
    console.log(a + b);
};

result(5,19);



// anonymous function -> a function without a name , can be created using function expression or 
//                       function declaration without a specified name


var result = function (a,b){ // only called because of result variable 
    console.log(a + b);
};

result(5,19);




// IIFE - Immediately invoked function expression
//        function ie defined and executed immediately after its creation

var res = (function (a,b){
    console.log(a +b);
    return a + b;
})(10,4);


// fat arrow function - used for 1 line & no return type reqd.

    // traditional function

    const sum =function (a,b){
        let result = `The sum of ${a} and ${b} is : ${a + b}`;
        console.log(result);
    };
    
    sum(5,10);

    /* fat arrow function

     syntax : 

    const result  = () => {

    }  */

    const sum2 = (c,d) => console.log(`The sum of ${c} and ${d} is : ${c + d}`);
    sum2(18,20);



    // reverse a string 

    const reverse = (str) => {

    }
    reverse("harsh bandral")






