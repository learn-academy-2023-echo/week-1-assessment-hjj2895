// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: The output is 5 because using the push method will return the length of the new array. 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The output came out as 10 because in a string, spaces and punctuation are counted as a character so that will be included as part of the length.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: 'o'
// b) Verify and explain: The output was 'o' because a string is a zero-index based which means that the first character in the string will be index 0 and second character will be index 1 and so on. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: The output was "Ruby" because an array is zero-index based which the elements will start from index 0 and increase by one for each element. Since index is assigned as 1, the element in the first index of the languages array is "Ruby".

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Type error
// b) Verify and explain: The output was TypeError: weekendDays.toUpperCase is not a function. This will result in a type error because in this case, we are attempting to use a method that is not compatible with an array. The .toUpperCase method is used in a string so this will cause an error. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: "number"
// b) Verify and explain: The output was "number" because dataTypes.length will equate to the length of the array which would be 4. The typeof operator will return a string of the data type of the operand.
