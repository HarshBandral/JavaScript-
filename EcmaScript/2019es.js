// A) Array.prototype.{flat,flatMap}

    // => flat() is a new array instance method that can create a one-dimensional array from a multidimentional array(nested array into single ,flat array)

    const nestedArray = [1,[2,[3,[4]]],5];
    const f = nestedArray.flat();
    const f1 = nestedArray.flat(3);
    
    console.log(f,f1);

    // => flatMap() combines flat() with map().Its useful when calling a fn that returns an array in the map() callback , but want your resulted array to be flat

    const arr = ["My name","is harsh","bandral"];
    const newArr = arr.flatMap((curVal) =>curVal.split(" "));
    console.log(newArr);



// entries returns an array containing all the object own  properties ,as an array of [key,val]pair 

// B) Object.fromEntries() is vice versa of it

    const p = {nam: "Harsh",age:30};
    const entries = Object.entries(p);
    console.log(entries);


    const newP = Object.fromEntries(entries);
    console.log(newP);

// C) trim()    trimStart()     trimEnd()

const a = "   df dfj   dfl "
console.log(a.trimStart());


// D) symbol.prototype.description property allows to retrieve the desciption of a symbol, when you create a symbol, you can optionally provide a description as its parameter .The description property lets you access this description

const ans = Symbol("a1s21");
console.log(typeof ans);
console.log(ans.description);


// E) optional catch binding => for try ... catch statement. This feature allows you to omit the parameter in the catch block , making it optional

    // traditional way
    try{
        //
    }catch(e){

    }

    // can we can omit the optional parameter

    try{
        10 + 29;
    }catch{
        console.log("there is an error");
    }