// A) shorthand notation

    const name = "Vinod";
    const age = 23;

    //traditional way
    // const person = {name :name,age :age};
    // console.log(person);

    // using shorthand notation for object property 

    const person = {name,age};
    console.log(person);

// B) destructuring makes it possible to unpack values from arrays , or properties of objects into distinct variables

    
    const num = [1,2,3,4,5];

    // traditional way
    // const a = num[0];
    // console.log(a);


    // destructuring 
    const[a,b,c,d,e] =  num;
    // const[,,,,e] =  num; ignoring elements
    
    console.log(a,b,c,d,e);

    //? swapping number
    let a1 = 10,b1 =20;
    [a1,b1] = [b1,a1];
    console.log(a1,b1);

    //? for objects 
    const user = { name: "Harsh", age: 30 };
     const { name1, age1 } = user;// order does not matter here
    console.log(name, age); // Output: Harsh 30



// C) spread operator 

    // => copying an array
    const arr = [1,2,3];
    const newArr = [...arr];
    console.log(newArr);

    // => concatenating // combining arrays
    const arr1 = [1,2,3,4];
    const arr2 = [4,5,6,7];
    const arr3 = [...arr1,...arr2]
    console.log(arr3);

    // => adding elements to existing array
    let fruits = ["Apple", "Orange","Grapes"];
    fruits.push(...["Mango","Melon"]);
    console.log(fruits);

    // => it converts the string into an array of its individual characters

        // traditional way
        const country = "India";
        console.log(country.split(""));

        // spread operator 
        const city = "Jammu";
        console.log([...city])

// D) Rest parameters - allows a fn to accept an indefinite number of arguments as an array 

    const sum = (...num) => {// it is different than spread as it is used in objects
        console.log(typeof num);
        return num.reduce((accum,curVal) =>    (accum = accum + curVal),0);
    };

    console.log(sum(1,2,322,112324,2,2,525,5352,5222,1));

    // fn defination can only have one rest parameter and it must be the last parameter in fn defination

