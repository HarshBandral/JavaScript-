
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

let objB = {name : "Alice" , age :275, city : "New York"};

console.log(areObjectEqual(objA,objB));