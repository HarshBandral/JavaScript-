//Math.abs() - how far the number is from 0. Always +ve
console.log(Math.abs(-8));

// Math.round(x) - roundoff
//Math.ceil(x) - rounds up
//Math.floor(x) - rounds down

console.log(Math.floor(3.999));//3

// Math.trunc(3.5)-> 3 (gives same output as floor in +ve cases)
// gives integer part of x


//Math.pow
console.log(Math.pow(2,5));
console.log(2**5);// same output

console.log(Math.sqrt(25));

//Math.random - return random number between 0(inclusive) & 1 (exclusive)

console.log((Math.random() *100).toFixed(3));
