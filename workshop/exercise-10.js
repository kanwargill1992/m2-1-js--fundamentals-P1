// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let num=0; num<7; num++){
    let sum = '#';
    for (let num1=1; num1< num; num1++){
        sum += '#';
    }
    console.log(sum);
}