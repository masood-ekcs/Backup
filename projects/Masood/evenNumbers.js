/* 
print Even numbers
for (var i = 2; i <= 100; i += 2) {
    console.log(i)
} */

/* // Print Armstrong numbers from 100 to 999

for (var i = 100; i < 1000; i++) {
    // console.log(i)
    var num = i
    var lastDigit = num % 10;
    num = Math.floor(num / 10)
    var secondDigit = num % 10;
    num = Math.floor(num / 10)
    var firstDigit = num % 10;
    console.log(lastDigit, secondDigit, firstDigit);
    if (i == Math.pow(lastDigit, 3) + Math.pow(secondDigit, 3) + Math.pow(firstDigit, 3)) {
        console.log(i + " is an Armstrong number")
    }
    else {
        //console.log("No")
        //console.log(i + " is not an Armstrong number")
    }
} */

/*
// Check if the number is prime 
var num = 97
var isPrime = true
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false
    }
}
if (isPrime == true) {
    console.log("Prime")
}
else {
    console.log("Not Prime")
}
 */
