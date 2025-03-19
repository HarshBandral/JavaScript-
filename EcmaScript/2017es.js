// A) String padding - way to add extra characters (like spaces) to make it a specific length

    // using padStart to pad from beginning 
    const myName = "Harsh";
    const padSt = myName.padStart(15);
    const padEnd = myName.padEnd(15);
        // gives fixed length if you pad length about same as string length then the output will not be different
    const pad1 = myName.padEnd(20,"^" );
    console.log(padSt,padEnd);
    console.log(padEnd,padSt);
    console.log(pad1);


// B) trailing commas - A trailing comma (also called a "final comma") is a comma at the end of a list in objects, arrays, or function parameters.
const user = {
    name: "Harsh",
    age: 25,  // ✅ Trailing comma (valid)
  };
  //Easier to Add/Remove Items (No need to edit previous lines