// Q8
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000

// ANSWER: the number you should see in the console is 3127500

// let sum =0;
// for (let num =0; num<=5000; num ++){
//     if (num%4 ===0){
//         sum += num;
//     }
// }
// console.log(sum);
let sum = 0;
for (let i = 0; i <= 5000; i++) {
  if (i % 4 === 0) {
    sum += i;
  }
}
console.log(sum);
