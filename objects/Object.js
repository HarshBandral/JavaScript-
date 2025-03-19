let person = {
    name: "Harsh",
    age : 21,
    isStudent : false,
    "is'Student" : true,
    greet : function () {
        console.log("Function is called as method if using for objects");
    },
};
person.greet();

// you can access object by using dot notation (".") ||  square bracket ("[]")

console.log(person.age);
console.log(person["is'Student"]);


// adding and modifing objects

person.job = "Web Dev";
person.age = 25;

console.log(person);


// dynamic key 
let idType = "EmployeID";

let employee = {
    [idType] : "A24187",// [] used for dynamic key
    Name : "Harsh Bandral",
    Age : 21,
    isEmployee : true,

    greet : function() {
        console.log(
            `Hey , my ${idType} is ${employee[idType]} and my name is ${employee["Name"]}`
        );
    },
};

employee.greet();


// pass by value works for number etc - original value wont be changed
// pass by reference is for objects - original value will be changed

// Object.assign() used to copy properties from  one or more source objects to a target object

let obj = {id:5,name :"Harsh"};

let newObj = Object.assign({},obj);

newObj.name = "FKH";
console.log("new" ,newObj);
console.log("orignal:",obj);// This is how you can modify obj without changing original one
