/* print numbers from 1 to 20
var i = 1
for (; i <= 20; i++) {
    console.log(i)
}
 */

// print numbers from 10 to 50, incremented by 3
/* for (var i = 10; i <= 50; i = i + 3) {
    console.log(i)
}
 */

//print numbers 1 to 1000, that matches 3 and 5
/* for (var i = 1; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        //if (i == i % 3 && i == i % 5) { // This is wrong
        console.log(i)
    }
} */


//Print all the factors of a number
/*
var num = 203
for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i + " is the factor of " + num)
    }
}
 */

//Count all the factors of a number
/*
var num = 203
var factorCount = 0
for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        factorCount++
        //console.log(i)
    }
}
console.log("Total factors for " + num + " = " + factorCount)
 */


// create a variable and count the length of its digit

var num = 520000000000000000000
var count = 0
for (; num > 0;) {
    // we just need to check if the num value is not equal to zero
    // run the code until num is greater than 0
    // once the num becomes zero, the loop will stop
    num = Math.floor(num / 10)
    count++; //
}
console.log(count)

/* 
var num = 520
for (; num > 0;) {
    num = Math.ceil(num / 10)
    console.log(num)
}
*/

//Print even factors of a given number
var num = 1024
for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 0) {
        console.log(i)
    }
}
//console.log(factorCount)
//console.log(evenFactor)


console.log("\n\n\n")
//-------------------------------------------------------------//
// Print number of factors that are multiple of 3
var num = 12345
var count = 0
for (i = 1; i <= num; i++) {
    if (num % i == 0 && i % 3 == 0) {
        console.log(i);
    }

}
