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
console.log(string1 == string2)

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

var result = date.slice(4, 7)   // End index value should be greater by 1 than the real value
console.log(result)
// Slice method parameter variations
var result = date.slice(4)
console.log(result)

var result = date.slice(-14, -5)
console.log(result)


// 2. SubString method
var result = date.substring(4, 7)
console.log(result)  // subString method is similar to slice method

// 3. substr method
var result = date.substr(4, 3)
console.log("result: " + result)  // Second Parameter takes the length of the string to be extracted


// Split Method
var info = "My name is Ayush Addhyan"
var data = info.split(" ")
console.log(data[3])
var csv = "name, class, age"
var words = csv.split(",")
console.log(words)


//Trim Method    - This method is used to remove speces from end and start of the string 
var data = " kayush4789@gmail.com               "
var result = data.trim();
console.log(data)

// Searching 
// 1. Includes method returns true or false
var data = "My name is Ayush Addhhyan. I am a SDE at Wells"
var result = data.includes("Wells")
console.log(result)

// 2. IndexOf method returns index of the found element or returns -1 if not found
var data = "My name is Ayush Addhhyan. I am a SDE at Wells. Wells in a financial Intitution in USA"
var result = data.indexOf("Wells")
console.log(result)

//3. lastIndexOf method returns last occurance index of the founf element or returns -1 if not found.
var data = "My name is Ayush Addhhyan. I am a SDE at Wells. Wells in a financial Intitution in USA"
var result = data.lastIndexOf("Wells")
console.log(result)

// Replace method
var info = "Hello I am based in Kolkata"
var result = info.replace("Kolkata", "Delhi")
console.log(result)

// Global Replacement
var info = "Hello I am based in Kolkata. Kolkata is a nice city."
var result = info.replace(/Kolkata/g, "Delhi")
console.log(result)





var sen = "Hello my name is Ayush Addhyan"
var isA = sen.includes("a")
var isE = sen.includes("e")
var isI = sen.includes("i")
var isO = sen.includes("o")
var isU = sen.includes("u")



if(isA==true && isE==true && isO==true && isI==true && isU==true)
{
    console.log("True")
}
else
{
    console.log("False")
}


