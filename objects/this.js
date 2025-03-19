const product = {
    id : 1,
    name : "Laptop",
    category: "Computers",
    brand : "Lenovo",
    price : 40000,
    stock : 100,
    description : "4 GB Ram along with  1 TB storage",
    image : "link of image",
};

// Object.keys() : returns an array containing the names of all properties of an object

let keys = Object.keys(product);
console.log(keys);


// Object.values() : return an array  containing the values of all properties of an object

let values = Object.values(product);
console.log(values);


// Object.entries() : returns an array containing arrays of key value pairs for each  property of object

let pairs = Object.entries(product);
console.log(pairs);


// Object.hasOwnProperty(): return boolean indicating whether the object has the specified property of an own property 

console.log(product.hasOwnProperty("id"));
console.log(product.hasOwnProperty("time"));


// Object.assign() : copies the values of all properties from one or more source to a target object

const target = {a:1,b:2};
const source = {b :4,c:5};
const source2 = {c : 7 , d :10};

const res = Object.assign(target,source,source2);
console.log(res);

// Object.freeze() : freezes an object , preventing new properties from being added to it and existing properties from being modified or deleted

Object.freeze(product);
product.id = 12321;
console.log(product);



//? write a function that compares two objects to determines if they have same properties and values

const areObjectEqual  = (obj1,obj2) =>{
    let o1 = Object.keys(obj1);
    let o2 = Object.keys(obj2);

    if(o1.length != o2.length){
        console.log("Their keys are not same");
        return false;
    }

    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
};

let objA = {name : "Alice" , age :25, city : "New York"};

let objB = {name : "Alice" , age :25, city : "New York"};

console.log(areObjectEqual(objA,objB));