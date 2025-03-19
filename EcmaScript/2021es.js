// A) replaceAll =>  replaces all occurences of a specified value with another value in a string

    // =>  replacing all occurences of word :
    const s = "Harsh, my name is Harsh not Harshit";
    const newS = s.replaceAll("Harsh","H");
    console.log(newS);

    // => replacing multiple spaces with single space
    const text = "   This       has     spa    ces ";
    const n = text.replaceAll(/\s+/g, " ");
    console.log(n);

// B) numeric separtor => used as separators within numberic literals to improve readability

    const bigNum = 1_000_000_000;
    console.log(bigNum);