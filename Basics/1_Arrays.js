var fruit = ['a','b','c','d','e','f'];
console.log(fruit.push("g")); // returns the new length
console.log(fruit.pop());// returns the returned variable

// pop remove element from last
// shift remove element from first
// push add item at the end
// unshift add element at the front 

fruit.unshift("h");
console.log(fruit);

// the splice method changes the content of array by adding or removing or replacing elements 

let fr = ["apple", "banana", "gauva","mango"]

// fr.splice(start,delCount,item1,item2,..itemN)
fr.splice(1,1);// start at ist index and delete it
console.log(fr)

let no = [9,8,7,6,5];
no.splice(1,0,4,3,2);
console.log(no);// [9, 4, 3, 2, 8, 7, 6, 5]
// to add at the last
no.splice(no.length,0,1)//add 1 at the last
console.log(no)

// indexOf gives the element index
// lastIndexOf gives the last index of that element
// includes gives true or false ie data is present or not - helps in searching/ filtering
// syntax for all
const n = no.lastIndexOf(1,10);//(searchEle, )
console.log(n);

// indexOf searches forward
// lastIndexOf searches backward

console.log(no.includes(9,3));// searches forward


// search + filter - same syntax as map

    // find - find and return the first element that matches the condition

    let arr = [1,2,3,4,4,5,6,7,8,8,9];
    
    const num = arr.find((curEle,idx,array) => {
        return curEle > 7
    });
    console.log(num);

    // findIndex - give the index of searched element

    // filter - returns a new array which satisfies all the conditions

    let arr1 = [1,2,3,4,4,5,6,7,8,8,9];
    
    const num1 = arr1.filter((curEle,idx,array) => {
        return curEle > 7
    });
    console.log(num1);


    // filter unique numbers 

    let array = [1,2,3,4,5,6,6,7,2,9];

    let unique = array.filter((curEle,index,arr) =>{
        return arr.indexOf(curEle) === index;
    });
    console.log(unique);

    // can also use set 
    console.log([...new Set(array)]);// use ... for making it more look like array

    // compare by using sort
    let ar= [1,2,3,4,5,6,6,7,2,9];
    ar.sort((a,b) => {// for asc
        if(a>b) return 1 ;// switch the orderf
        if(b>a) return -1; // keep the order
    })
console.log(ar);


 const res = [1,2,3,4,5];

 const resu = res.map((curEle) => {
    if(curEle % 2 === 0){
        return curEle* curEle;
    }return curEle;
 });
 console.log(resu);

 // for reduce method - used to accumulate or reduce an array to a single value . used in finding total

    /* accumulator - stores the running total
       initial value - starting value
     
        syntax     
           array.reduce(function callback(accumulator,curValue,index,array){
             logic},initial value); */


    const product = [100,200,300,400,500];

    const totalPrice = product.reduce((accum,curEle)=> {
        return accum + curEle;
    },0);
    console.log(totalPrice);