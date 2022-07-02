// Loops - Loop is a programming construct that allows you to execute a block of code multiple times.
// Loops are used to execute the same block of code multiple times.


// For loop - for(initialization; condition; increment/decrement)
// for(var i=0; i<5; i++)
// {   
//     console.log(i, "Ayush");
// }


// Printing multiplication table of 2
var arr = [1,2,3,4,5,6,7,8,9,"Ayush", "Addhyan"]
for(var i=0; i<11; i++)
{
    console.log(arr[i])
}


//Different syntax 
var j =0
for(; j<10; )
{
    j++;
   // console.log(j)

}


// Print individual digits of a number

var num = 371 
var target = num

var last_digit = num%10;
num = Math.floor(num/10)
var second_last = num%10
num = Math.floor(num/10);
var first_digit = num%10;

//console.log(last_digit, second_last, first_digit);


var string_num = target.toString() 

first_digit = parseInt(string_num[0])
second_last =  parseInt(string_num[1])
last_digit = parseInt(string_num[2])
console.log(first_digit, second_last, last_digit);


if(target == Math.pow(first_digit,3) + Math.pow(second_last, 3) + Math.pow(last_digit, 3))
{
    console.log(target + " is an armstrong number");
}
else
{
    console.log(target + " is not an armstrong number");

}


