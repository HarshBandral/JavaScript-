// findLast()
// findLastIndex()
// .toReversed()
// .toSpliced(start,delIndex,... new items)


// arrName.with(index,value) => change value of element at specified index without changing original array
    let arr = [1,2,3,4,5,];
    const repl = arr.with(1,"9");
    console.log("org",arr);
    console.log("new",repl);
