var i = 1;
//Overwrite
// for(var i=1; i<=10; i++)
// {
//   console.log(i);
// }

// for(;i<=10; )
//   {
//     console.log(i)
//     i++;
//   }

// var n = 10

// for(var i=0; i<n; i++)
//   {
//       var temp = ""
//       for(var j=0; j<n; j++)
//         {
//            temp += "*"
//         }

//       console.log(temp);

//   }
//Repeat function only string value repeat
var n = 10;

for (var i = 0; i < n; i++) {
  var temp = "*";
  var k = temp.repeat(10);
  console.log(k);
}

var num = 216;
var isInteger = Number.isInteger(Math.sqrt(216)); // Method to check wheather a number is integer or not.

var sqrt = Math.sqrt(num);
if (Math.floor(sqrt) == sqrt) {
  console.log(num, "is a perfect sqauare");
} else {
  console.log("Not a perfect square");
}
