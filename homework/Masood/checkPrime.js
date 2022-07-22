// Check if the number is prime
var num = 160
var isPrime = true
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false
    }
}
if (isPrime == true) {
    console.log(num + " = Is Prime")
}
else {
    console.log(num + " = Is Not Prime")
}

//
//
//Count the total number of factors
//var num = 169
var factorCount = 0
for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i + " is the factor of " + num)
        factorCount++
        //console.log(i)
    }
}
console.log("Total factors for " + num + " = " + factorCount)

