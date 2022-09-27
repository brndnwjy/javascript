// S W I T C H   C A S E

// this is another conditional that you can use for validating your code
// just like IF-ELSE, you will give several condition to validate but with different format

switch (key) {
  case value1:
    // this will run if key = value1
    break;

  case value2:
    // this will run if key = value2
    break;

  default:
    // this will run if none of the previous cases are true
    break;
}

// Note
// 1. key is the indicator, which variable you want to validate
// 2. case value1 and case value2 are just like IF and IF-ELSE's,
//    it contains condition for the key that you currently validate
// 3. keyword "break" will stop the whole validating progress,
//    break will only be run if the case is true
// 4. default is just the same as ELSE, it will run if none of the previous cases are true
// 5. you need at least one case and a default

// example 1 (similar to IF-ELSE example)
const name = "Brandon";

switch (name) {
  case "Brandon":
    console.log("this is Brandon");
    break;

  case "May":
    console.log("this is May");
    break;

  default:
    console.log("i don't know who this person is :/");
    break;
}

// the concept is similar, it will validate the value of variable name
// the console.log will only run if the condition is true
// from the code above, line 34 will be run since the value of name equals to "Brandon"
// but, if you forgot to put the break keyword on line 35, line 38 will be run as well

// example 2
const grade = "B";

const evaluation = (grade) => {
  switch (grade) {
    case "A":
      console.log("Marvel");
      break;

    case "B":
      console.log("Great");
      break;

    case "C":
      console.log("Good");
      break;

    default:
      console.log("Bad");
      break;
  }
};

evaluation(grade);

// you can use switch case inside a function too!