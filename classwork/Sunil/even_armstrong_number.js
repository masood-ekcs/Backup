/*Even Number*/
// for (var i=0; i<=100; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }

//Armstrong Number
for (var i = 1000; i <= 9999; i++) {
    var num = i
    var ft = num % 10
    num = Math.floor(num / 10)
    var snd = num % 10
    num = Math.floor(num / 10)
    var td = num % 10
    num = Math.floor(num / 10)
    var fr = num % 10

    if (i == Math.pow(ft, 4) + Math.pow(snd, 4) + Math.pow(td, 4) + Math.pow(fr, 4)) {
        console.log(i)
    }
}
var num = 273
var isPrime = true
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false
<<<<<<< HEAD
    }
}
if (isPrime = true) {
    console
}
=======
    }}
    if(isPrime = true){
        console.log("its prime number")
    }
 //Prime Number   
    var count = 0;

    for(var num=3;num<=100;num++){
              var isPrime = 1 //assuming prime is true
              for(var i =2; i<num; i++)
                {
                  if(num%i==0)
                  {
                    isPrime = 0; // if false
                   
                  }
                }
          if(isPrime)
          {  count++;
            console.log(num)
            
          }
      
    }
    console.log(count)
>>>>>>> 89e8f03dbebd854f90633b815cf7bf01110573dc

