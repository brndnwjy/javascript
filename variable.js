// V A R I A B L E

// first off, we have to get into the fundamentals of javascript
// we start with variables, it's basically a vessel to store a value/data
// there are 3 different type of variable: var, let, const

// -----------------------------------------------------------------------------

// I. Var, Let and Const

// 1. var, this is the older type of variable, avoid using it
// 2. let, this type let you change the value of your variable
// 3. const, this type value can't be change nor empty

// -----------------------------------------------------------------------------

// II. Declare a variable

var name = "Brandon"
// var indicates the type of variable
// name indicates the name of your variable, you can name it anything you want
// equation symbol (=) indicates that you are assigning a value to the variable
// "Brandon" is the value of the variable name

// Examples 
var lastName = "Wijaya"
let age = 21
const city = "North Jakarta"

// Note 
// 1. variable name shouldn't be separated by space (eg. var last name = "Wijaya"),
//    this will cause an error

// 2. it's recommended to use camelcase while naming a variable,
//    the first word on lowercase and every following word comes with a capitalize first letter
//    first name = firstName
//    last name = lastName
//    date of birth = dateOfBirth

// 3. you can't declare a variable with the same name (except with var)
var lastName = "Gouw" 
// this is okay, because I use var on line 16

let age = 20 
// this will cause an error, we have use it on line 17

const city = "West Jakarta"
// this will cause an error, we have use it on line 18

var city = "East Jakarta"
let city = "South Jakarta"
// this will cause an error even if you use different type

// 4. you can't reassign new value to a variable with const type but it's doable with var and let
//    to reassign the value, you just need to call the variable name

const value1 = 1
// I'm declaring a new variable
value1 = 2
// I try to reassign the value
// because I use const, this will cause an error

let value2 = 3
value2 = 4
value2 = 5
value2 = 6
// this is okay, I can reassign it as many time as I want to
// this works too if you were using var

// -----------------------------------------------------------------------------

// III. Calling a variable
// you can use the variable you just made by calling it

let num1 = 10
let num2 = 12
let num3 = num1 + num2
// num3 will call num1 and num 2, adding their value together. so num3 = 22

console.log(num1)
console.log(num2)
console.log(num3)
console.log("Hello")
console.log(123)
// console.log lets you print your code to the console
// you can call a variable just like that or just anything you want
