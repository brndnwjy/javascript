// D A T A T Y P E

// each data has its own type, you can differentiate it while assigning the value

// -----------------------------------------------------------------------------

// I. String
// string indicated with the usage of tick,
// you can use either a single tick ('), a double tick (") or a backtick (`)
// between those two tick, you can add anything except the tick itself

let firstMessage = 'how was your day?'
let secondMessage = "have you had your lunch?"
let thirdMessage = `be careful on your way home`

// let fourthMessage = 'oh it's midnight now'
// let fifthMessage = "She said "i fell sleep last night""
// these two will cause error because I the same tick as the string indicator

let sixthMessage = "it's been a long day"
// this is okay, I use different tick

let seventhMessage = "12345*&^%@,./?_#"
// you can write practically anything

// -----------------------------------------------------------------------------

// II. Number
// you can simply write the number to have a number type
// you can even use calculation process inside of a variable

let number1 = 123
let number2 = 3.14
let number3 = 4 + 8
let number4 = 18 - 6
let number5 = 27 * 11
let number6 = 28/4

let number7 = 123 
// this is a number

let number8 = "123"
// this will be read as a string

// -----------------------------------------------------------------------------

// III. Boolean
// there are only two value for a boolean, true or false

let bool1 = true
let bool2 = false
let bool3 = "true"
// remember not to use a tick, bool3 will count as a string instead

// -----------------------------------------------------------------------------

// IV. Array
// it's like a collection of values inside a single variable
// you can assign an array using square brackets ([])
// each value separated with a comma
// you can have a mixed data type in your array

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// this array have 9 values, its a number 1 - 9

let arr2 = ["Brandon", "Wijaya"]
// this array have 2 values, its a string "Brandon" and "Wijaya"

let arr3 = ["Brandon", 1, 2, 3, true, false]
// it doesn't have to be the same data type, feel free to add anything

// V. Object
// it's similar to array, but with object you can have key and value
// you can name the key anything you want
// you can assign an object using curly brackets ({})
// inside the bracket, you declare a key and value with this format -> key: value
// don't forget to put a comma in between

let biodata = {
    firstName: "Brandon",
    lastName: "Wijaya",
    age: 21,
    city: "North Jakarta",
    isMarried: false
}
// in the biodata object, I have 5 keys (firstName, lastName, age, city and isMarried)
// each key followed by its value separated with colon



// Note
// as for array and object, you can even have an array inside an array, object inside an object,
// or both inside each other

let arrayInArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// this array have 3 values, its 3 different arrays

let objectInObject = {
    name: "Brandon",
    education: {
        juniorHigh: "Jakarta Junior High School",
        seniorHigh: "Jakarta Senior High School",
        university: "Jakarta University"
    },
    age: 21
}
// this object have a 3 keys, one of them is an object which is education

let arrayInObject = {
    key1: "doggo",
    key2: "cats",
    key3: [1, 2, 3]
}
// this object have an array as key3's value

let objectInArray = [ { key1: 1, key2: 2, key3: 3 }, 4, 5, 6 ]
// this array have 4 values, its an object and number 4, 5, 6