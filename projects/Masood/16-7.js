var num = 1;
var sol = "";
console.log(num % 2);

while (num > 0) {
  if (num % 2 == 1) {
    console.log(num + " = " + (num % 2));
    console.log("sol-1 before = " + sol);
    sol = "1" + sol;
    console.log("sol-1 After = " + sol);
  } else {
    console.log(num + " = " + (num % 2));
    console.log("sol-0 before = " + sol);
    sol = "0" + sol;
    console.log("sol-0 After = " + sol);
  }
  console.log("num before = " + num);
  num = Math.floor(num / 2);
  console.log("num After = " + num);
  console.log("");
}
console.log(sol);
