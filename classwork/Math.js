/*
console.log(Math.PI) // PI is constant 
console.log(Math.SQRT2); 
console.log(Math.SQRT1_2); 
console.log(Math.LN2);

console.log(Math.round(4.3));
console.log(Math.floor(-1.5)); //Nearest Left Integer value
console.log(Math.ceil(4.5)) // Nearest Right Integer value
console.log(Math.trunc(2.3)) // Returns Integer value after removing the decimal part
console.log(Math.pow(2,10)) // To find power of any number 
console.log(Math.abs(-3.5)) // Returns absolute positive value
console.log(Math.max(2,4,1,6,10)) //Returns maximum value
console.log(Math.min(2,4,1,6,10)) //Returns minimum value
// Floor, ceil, round, trunc of any integer is equal to integer itself 

      // -4 -3 -2 -1 0 1 2 3 4 5


*/

//console.log(Math.random())  // Range is from 0-0.999999999999
//Random number between 0-9.9999999
//console.log(Math.floor(Math.random()*41))

/*
       0*10<= x <= 0.9999999*10
       0<= x  <= 9.9999
*/

//Formula to find a random number between max and min number both inclusive
//Math.floor(Math.random() * (max - min + 1)) + min
var randBetween = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
console.log(randBetween);
