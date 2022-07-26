// for(i=1;i<=20;i++){
//     console.log(i)
// }
/*print number 10 to 50 , that number+3 */
// for(i=10;i<=50;i=i+3){
//     console.log(i)
// }

/*print number 1 to 1000 which divide by 3 and 5 */
// for(var i=1;i<=1000;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i)
//     }
// }
// var num = 230
// count= 0
// for (var i=1;i<=num;i++){
//   if(num%i==0){
// count++
//   }
// }
// console.log(count)

// var num = 2468513
// count = 0
// for(; num>0; ){
//     num = Math.floor(num/10)
//     count++
// }
//console.log(count)

// var num  = 54321
// var count = 0;

// var ans = ""

// for(;num>0;)
//   {
//     var digit =  num%10;
//     num = Math.floor(num/10);
//      ans = ans + digit.toString()
//   }
//   console.log(parseInt(ans))

//Print even factors of a given number
var num = 1024;
for (var i = 1; i <= num; i++) {
  if (num % i == 0 && i % 2 == 0) {
    console.log(i);
  }
}
//console.log(factorCount)
//console.log(evenFactor)

console.log("\n\n\n");
//-------------------------------------------------------------//
// Print number of factors that are multiple of 3
var num = 12345;
var count = 0;
for (i = 1; i <= num; i++) {
  if (num % i == 0 && i % 3 == 0) {
    console.log(i);
  }
}
