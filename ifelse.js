// I F - E L S E

// in javascript, we can have a variety of output regarding to its value/condition
// that is when you have to use a conditional and the first one is if-else
// just like how it sounds, the code will check IF the requirement fulfilled or no

if (condition1) {
  // this will be run if condition1 is true
  // if it's false, then moving on to the next one
} else if (condition2) {
  // this will be run if condition2 is true
  // if it's false, then moving on to the next one
} else {
  // this will run if none of the previous condition are true
}

// Note
// 1. the main keyword is IF, ELSE IF and ELSE
//    a. IF only used by the first validation/statement
//    b. ELSE IF is used for adding more condition to validate
//       you can have more than one ELSE IF
//    c. ELSE is the last validation
// 2. IF and ELSE IF needs a condition inside a round brackets "()",
//    while ELSE doesn't need any bcs it will work if all IF and ELSE IF's are false
// 3. the format that you can use :
//    a. IF
//    b. IF - ELSE
//    c. IF - ELSE IF's
//    d. IF - ELSE IF's - ELSE

// example 1
const name = "Brandon";

if (name == "Brandon") {
  console.log("this is Brandon");
} else if (name == "May") {
  console.log("this is May");
} else {
  console.log("i don't know who this person is :/");
}

// this code will validate if the value of name equals to "Brandon" or no on line 34
// if true, line 35 will be run. if false, it moves on to next line to another validation
// another validation to see if the value equals to "May" or no on line 36
// if true, line 37 will be run. if false, line 39 will be run bcs there's no more condition to validate

// example 2
const age = 10;

if (age > 17) {
  console.log("you are legal, here's some drink");
} else {
  console.log("you are still a kid, you can't have this drink");
}

// another simple example of how to use IF-ELSE
// this one only have on validation, is age is bigger than 17 or no on line 51
// if true, line 52 will be run. if false, run line 54 instead

// example 3
const distance = 80;

const functionWithConditional = (distance) => {
  if (distance > 100) {
    console.log("it's too far!");
  } else if (distance < 10) {
    console.log("it's close!");
  } else {
    console.log("it's not too far nor too close");
  }
};

functionWithConditional(distance)

// you can add a conditional into a function just like this one!!