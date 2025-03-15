let t = "My name \ \ is harsh . &\n I \am a \"software developer\ ";
console.log(t);

let t1  = "Harsh Bandral";
let strArr = Array.from(t1);
console.log(strArr);
let strMap = strArr.map((curEle , index) => {
    return `${curEle} : ${index}`;
});
console.log(strMap);


/* search - using i for ignoring case sensitive
            using g gor global
    g is not used in search method as it gives only first index */
let t2 = " JavaScript is different to Java";
let re = t2.search(/java/gi);
console.log(re);
console.log(t2.indexOf("Java"));

/* slice - extract part in a string 

     syntax 
     slice(start , end)
     does not include end
     

    substring is also similar
    
    slice - support -ve no like  .at
    ss - does not support -ve 

    

     charCodeAt() returns the UTF-16 code of value 

     fromCharCode() converts Unicode values (UTF-16 code units) into a string of characters 

     at() works same as charAt() , key diff is it allows the use of negative indexes while charAt() dont 



     join() and toString() diff is that
        join allow custom separators , while toString always use ","
        toString works on numbers,objects , boolean */


    let arr = [1, 2, 3];
    console.log(arr.join("-"));  // "1-2-3"
    console.log(arr.join(" | ")); // "1 | 2 | 3"


    let num = 100;
    console.log(num.toString()); //  "100" (Works on numbers)

    let bool = true;
    console.log(bool.toString()); // "true" (Works on booleans)



    // print letters from a to z

    console.log("a".charCodeAt(0));//97
    console.log("z".charCodeAt(0));//122

    for(let i = 97;i<=122;i++){
        console.log(String.fromCharCode(i));
    }

