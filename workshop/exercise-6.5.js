// Q6.5
// Write a loop that will iterate from 0 to 15.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even
// ...

// many other possibilities here.

// for (let num =0; num<=15; num++){
//     if(num%2 !== 0){
//         console.log(`${num}` +" "+ "is odd");
//     } else{
//         console.log(`${num}` +" "+ "is even");
//     }
// }

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
