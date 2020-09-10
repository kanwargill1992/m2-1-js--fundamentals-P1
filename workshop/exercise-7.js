// Q7
// Write a loop that will output every hour of the day (0 to 23) and
// determine whether it is time to sleep, eat or train.
// Life in the army is regimented! These are the hours alloted to each activity.
// Sleep between 22h and 5h
// Eat at 7h, 13h and 18h
// The rest of the time is spent training.

// The output should look something like
// It's 11h. Time to train!
// It's 12h. Time to train!
// It's 13h. Time to eat!

// for (let num=0; num<= 23; num ++){
//     let life = 'train';
//     if(num<=5 || num >= 22){
//         life = 'sleep';
//     } if( num === 7 || num === 13 || num === 18){
//         life = 'eat';
//     }
//     console.log("It's"+" "+`${num}`+"h."+" "+"Time to" +" "+ `${life}`);
// }

for (i = 0; i < 24; i++) {
  let life = "train";
  if (i <= 5 || i >= 22) {
    life = "sleep";
  }
  if (i == 7 || i === 13 || i === 18) {
    life = "eat";
  }
  console.log("Its" + " " + `${i}` + " " + "Its time to" + " " + `${life}`);
}
