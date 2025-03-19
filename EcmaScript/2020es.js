// A) BigInt - is a data type used to represent and perform operations on large integers that exceed the limits of regular numbers
    
    const num = BigInt("382927439429473892329847293289");
    console.log(typeof num,num);
    

    let n = Number.MAX_SAFE_INTEGER;
    n = BigInt(n);
    let newN = n + 199n;
    console.log(newN);

// B) nullish coalescing operator (??) => provides a way to handle nullish(null or undefined). It returns its right hand value when its left value is nullish , otherwise  it return left value

    let favDigit = 0;// it is considered as false 
    userFav = favDigit || 10;
    console.log(userFav);

    userfav1 = favDigit ?? 10;
    console.log(userfav1);


// C) optional  chaining operator (?.) =>allows you to safely access nested properties or methods without causing errors if any property is null or undefined 

    const person = {
        name : "Harsh",
        address : {
            city : "Jammu",
            zipcode : 180005,
            coordinates : {
                latitude : 20.42521,
                longitude : -51.5125,
            },
        },
    };

    const latitude = person.address?.coordinates?.latitude ?? "not present";// ?? used so that if value is 0 than it can handle it
    console.log(latitude);