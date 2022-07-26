//var students = [1,2,3,4,5, "Ayush", true, ["Ayush", "Addhyan"], {name: "Ayush", age: 22}] // We can access any element using 0 based index.
//console.log(students[8].age)

//Array Methods

//console.log(students.length)  // To calculate number of elements in the array
//console.log(arr.push(10)) // To add an element in the last position of the array
//console.log(arr.pop()) // To remove the last element in the array
// console.log(arr.unshift(15)) // To add an element in the starting position of the array
// console.log(arr)
// console.log(arr.shift()) // To remove the first element in the array
// console.log(arr)
/*
var arr = [1,2,3,4,5]
var name = "Ayush"

console.log(name[3])
console.log(arr[3])

arr[2] = 100
console.log(arr)
name[2] = "z"
console.log(name)
// Strings are immutable in javascript
let resultArray = name.split("")
console.log(resultArray)
resultArray[2] = "z"
var resultString = resultArray.join("")
console.log(resultString)   //Join method is used to create a string from an array
*/

// Comparision function
function cmp(a, b) {
  if (a > b)
    //For descending order a<b
    return 1;
  else return -1;
}

var arr = [3, 2, 215, 54, 1, 100];
arr.sort(cmp);
console.log(arr);
// Drawback of default sort method - It sorts based on dictionary string value

var given_string = "ayush"; // ahusy
var check_string = "yuqah"; // ahusy

var result1 = given_string.split("").sort().join("");
/*
var arr1 = given_string.split("")
arr1.sort()
var result1 = arr1.join("")

*/
var result2 = check_string.split("").sort().join("");
if (result1 == result2) {
  console.log("Yay, they're anagrams");
} else {
  console.log("No, they are not anagrams");
}
