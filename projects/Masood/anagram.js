var s1 = "masood";
var s2 = "somdao";

var arr1 = s1.split("");
arr1.sort();
var str1 = arr1.join("");

// var arr2 = s2.split("")
// arr2.sort()
// var str2 = arr2.join("")

// OR

var str2 = s2.split("").sort().join("");

if (str1 == str2) {
  console.log("Yes, this is Anagram!");
} else {
  console.log("No, try again!");
}
