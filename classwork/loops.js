// Loops - Loop is a programming construct that allows you to execute a block of code multiple times.
// Loops are used to execute the same block of code multiple times.


// For loop - for(initialization; condition; increment/decrement)
// for(var i=0; i<5; i++)
// {   
//     console.log(i, "Ayush");
// }


// Printing multiplication table of 2
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Ayush", "Addhyan"]
for (var i = 0; i < 11; i++) {
    console.log(arr[i])
}


//Different syntax 
var j = 0
for (; j < 10;) {
    j++;
    // console.log(j)

}


// Print individual digits of a number

var num = 371
var target = num

var last_digit = num % 10;
num = Math.floor(num / 10)
var second_last = num % 10
num = Math.floor(num / 10);
var first_digit = num % 10;

//console.log(last_digit, second_last, first_digit);


var string_num = target.toString()

first_digit = parseInt(string_num[0])
second_last = parseInt(string_num[1])
last_digit = parseInt(string_num[2])
console.log(first_digit, second_last, last_digit);


if (target == Math.pow(first_digit, 3) + Math.pow(second_last, 3) + Math.pow(last_digit, 3)) {
    console.log(target + " is an armstrong number");
}
else {
    console.log(target + " is not an armstrong number");

}




// print a reverse 
var num = 54321
var count = 0;

var ans = ""

for (; num > 0;) {
    var digit = num % 10;
    console.log(num)
    num = Math.floor(num / 10);

    ans = ans + digit.toString()
}
console.log(parseInt(ans))



// 1 st -> num = 54321 digit = 1  ans = 1
// 2 nd -> num = 5432 digit = 2 ans = 12
//3 rd -> num = 543 digit = 3 ans = 123
//4th -> num = 54 digit = 4 ans = 1234
//5th -> num = 5 digit = 5 ans = 12345
//6th ->num = 0 - Loop exit 



//-4 -3 -2 -1 0 1 2 3 4 5 
//console.log(count)





