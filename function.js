// F U N C T I O N

// function play a big role in javascript, it's handy to use
// function allows you to run a series of code for some specific task
// function can take some parameters that needed in the code

// -----------------------------------------------------------------------------

// I. Declare a function
// there are 3 ways to declare a function: declaration, expression and arrow

// a. Declaration
function function1(){
    // your code here
}

// b. Expression
const function2 = function(){
    // your code here
}

// c. Arrow Function
const function3 = () => {
    // your code here
}

// 1. function1, function2 and function3 are the name of the function, 
//    you will have to use it to call the function later.
// 2. for expression and arrow function, just use const as the variable type.
// 3. the round bracket "()" filled with params, a data that will be used on the function.
// 4. the curly bracket "{}" filled with the code you want to run.
// 4. all three ways are good to use, but programmer nowadays tends to use the arrow function.

// -----------------------------------------------------------------------------

// II. Call a function
// a function need to be called first before it runs
// you can simply write down the function's name followed by round bracket

const greeting = () => {
    console.log("good morning")
}
// this is an example of a function, it will print "good morning" when run

greeting()
// this is how you call a function

// -----------------------------------------------------------------------------

// III. Function parameter
// a function can take a parameter, which can be used in the code later on

const greetingWithName = (name) => {
    console.log("good morning " + name)
}
// this function take one param, its called name
// and the parameter will be printed
// you can name your paramater anything, but remember to use that name again when using it


const example1 = (param) => {
    console.log(param)
}

const example2 = (name) => {
    console.log(city)
}

// from the example above, example2 wont work because the parameter was named "name"
// so the "city" on line 65 is undefined.


// now you know how to use params, you need to define the params
// you can either write down the value or use another variable
// you add the parameter while calling the function

const firstName = "Brandon"

const functionWithParam = (name) => {
    console.log(name)
}

functionWithParam(firstName)
// this is how you use another variable as a param
// result = "Brandon"

functionWithParam("May")
// this is how you enter a value as a params
// result = "May"


// you can use as many params as you want, you can use a comma to separate those params

const functionWithManyParams = (param1, param2) => {
    console.log(param1 + param2)
}

functionWithManyParams(27, 11)
// 27 is the param1
// 11 is the param2
// result = 38

// -----------------------------------------------------------------------------

// Function example

// addition
const addition = (num1, num2) => {
    const result = num1 + num2
    console.log(result)
}

addition(4, 8)

// multiplication
const multiply = (num1, num2, num3) => {
    const result = num1 * num2 * num3
    console.log(result)
}

// -----------------------------------------------------------------------------

// kindly ask if you find any problems regarding function
// function have a wider scope than the rest of the previous material