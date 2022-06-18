//String Concatination
var sent1 = "My name is "
var sent2 = "Ayush"
console.log(sent1 + sent2)

//String in single quotes and escape characters
// Escape character \
var ayush = 'My name is \\ \'Ayushhhhh\''
console.log(ayush)

//New Line
// \n - New Line Character
var sent = "Hello \nHow are you?"
console.log(sent)
/*
\r - carriage return
\b - Backspace

*/


// How can we create a string variable

var name = "Ayush"
var name = 'Ayush'
var name = `Ayush`
var name = new String("Ayush")



//String Comparisions
// String comparisions are case sensitive
var string1 = "Ayush"
var string2 = "ayush"
console.log(string1==string2)

// String convert to uppercase and lowercase
var name = "Ayush"
var upperCase = name.toUpperCase()
var lowerCase = name.toLowerCase()
console.log(name)
console.log(upperCase)
console.log(lowerCase)

// String Methods 
var desc = "My name is Ayush"

// String length
console.log(desc.length)

//  String slice

var date = new Date().toString()
date[2] = 'P'   // String objects are immutable in javascript
/*console.log(date[2])
console.log(date)
*/
console.log(date)
// 1. slice method 

var result = date.slice(4,7)   // End index value should be greater by 1 than the real value
console.log(result)
// Slice method parameter variations
var result = date.slice(4)
console.log(result)

var result = date.slice(-14, -5)
console.log(result)


// 2. SubString method
var result = date.substring(4,7)
console.log(result)  // subString method is similar to slice method

// 3. substr method
var result = date.substr(4, 3)
console.log(result)  // Second Parameter takes the length of the string to be extracted














