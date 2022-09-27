// W H I L E   L O O P

// another way of looping, WHILE comes with two different formats

// // WHILE
// // initialization was done outside the loop
// while (condition) {
//     // run this code while the condition is true
//     // you need to add the iteration here
// }

// // DO WHILE
// // initialization was done outside the loop
// do {
//     // run this code no matter what
//     // don't forget to add the iteration here
//     // after all code have been run, we do a validation to the condition
//     // if true, it runs over from line 15
//     // if false, the loop stops
// } while (condition);

// Note
// 1. the most obvious difference between WHILE and DO WHILE is 'when to validate the condition'
//    a. WHILE will validate the condition before it runs the code
//    b. DO WHILE will at least runs the code once bcs the validation is done after the code
//       so even if the condition is already false, the code from line 15 - 20 will be run
// 2. just like the other one, init variable should be declared with let
// 3. different from FOR loop, you can place the iteration before any other code (see example 2)

// example 1
// WHILE
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// DO WHILE
let j = 1;
do {
    console.log(j)
    j++
} while (j <= 10);

// both of these codes will print a number 1 - 10


// example 2
let k = 1
while(k <= 10){
    k++
    console.log(k)
}

let l = 1
while(l <= 10){
    l++
    console.log(l)
    l++
}

// different from FOR, WHILE can place the iteration whenever. you can also have more than one iteration
// just don't forget to put one, it will cause an infinity loop


// example 3
// WHILE
let x = 100
while (x <= 10) {
    console.log("this won't be printed out")
    console.log(x)
    x++
}

// DO WHILE
let y = 100
do {
    console.log("this will be printed out")
    console.log(y)
    y++
} while (y <= 10);

// both condition is false from the start but the code on line 78 - 80 will works
// that's because on DO WHILE, the validation was done at the end