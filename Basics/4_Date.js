// ways to write data time

const d1 = new Date();
console.log(d);

const dateString = "2025-03-15T11:20:32.617Z";
const d2 = new Date(dateString);
console.log(d2);

const d3 = new Date(2025,9);
console.log(d3);


const d4 = new Date(2025,9,15);// month start from 0 in js ie jan = 0
console.log(d4);

const d5 = new Date(2025,3,19,11);
console.log(d5);


const d6 = new Date(2025,3,19,11,29);// year , month , days , hours , minutes , seconds , milliseconds
console.log(d6);


// other methods 

const date = new Date();

const localString = date.toLocaleString();
console.log(localString);


const localDateString = date.toLocaleDateString();
console.log(localDateString);

const localTimeString = date.toLocaleTimeString();
console.log(localTimeString);

console.log(Date.now());// give milli seconds


//? Repeat a function by setInterval then stop  it after 5 sec by using clearInterval

const repeated = () => {
    console.log("This message will be repeated after every 1 sec");
}

const intervalID = setInterval(repeated,1000);

setTimeout(() => {
    clearInterval(intervalID);
},5000);