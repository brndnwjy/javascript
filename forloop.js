// F O R   L O O P

// looping is used to run a block of code several times while the given condition remains true
// the usage of loop is pretty versatile, it needs more time to fully understanding the concept
// we are going to learn abt the first loop- FOR loop

for(initialization; condition; iteration){
    // while condition is true, run this code
}

// Note
// FOR loop takes three different arguments separated by semicolon
//    a. initialization, declare a random variable with a number value
//       this will later be used in the condition
//    b. condition, while this equals true, the code will be run
//    c. iteration, once the code on line 8 is done. there'll be a change to the init variable,
//       the changes caused by iteration
//    d. while declaring a init variable, use let so the value can be changed

// example 1

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// let's start with this simple code above
// we init a variable "i" with a value of one
// while the value of "i" is less than equal to 10, line 23 will be run
// whenever line 23 run, the value of "i" changed
// the iteration is i++, which add one to "i"

// breakdown :
// a. the code will start from line 21, init a variable "i" with value of 1
// b. validate the condition, bcs 1 <= 10 is true, line 23 will print out "1"
// c. all code inside the curly brackets is done, iteration to "i". now the value of "i" equals 2
// d. validate the condition, bcs 2 <= 10 is true, line 23 will print out "2"
// e. another iteration to "i" and it keep running until "i" equals to 10
// f. after printing "10", the iteration will make "i" have a value of 11
//    the condition is false, so the loop stops

// final output :
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// example 2

const limit = 5
let result = 0

for (let i = 1; i < limit; i++) {
    result = result + i
}

console.log(result)

// we can use another variable into loop like how I use limit and result inside loop
// the loop will run as long as the value of "i" less than limit
// while the condition is true, it will adds the value of "i" to result

// breakdown : 
// a. first run, "i" equals 1. result changed to 1 (add by 1)
// b. second run, "i" equals 2. result changed to 2 (add by 2)
// c. third run, "i" equals 3. result changed to 6 (add by 3)
// d. fourth run, "i" equals 4. result changed to 10 (add by 4)
// e. fifth run, "i" equals 5. the condition is false, the loop stops
// f. console.log(result)