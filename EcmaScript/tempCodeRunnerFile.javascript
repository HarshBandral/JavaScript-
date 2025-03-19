 const sum = (...num) => {
        console.log(typeof num);
        return num.reduce((accum,curVal) =>    (accum = accum + curVal),0);
    };

    console.log(sum(1,2,322,112324,2,2,525,5352,5222,1));

