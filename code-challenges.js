// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
//Create a function with two parameters
//Have each parameter as a string
//Compare the length of each string using .length 
//return the string with bigger length
const isBigger = (str1, str2) => {
    if (str1.length > str2.length){
        return str1
    }else{
        return str2
    }
}

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"
//console.log(isBigger(fruit1, fruit2))

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"
//console.log(isBigger(fruit3, fruit4))

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
//Create a function with one parameter
//Have a number as the parameter
//If the number is less than 212
    //return number is below boiling point
//If the number is greater than 212
    //return number is above boiling point
//If number is equal to 212
    //return number is at boiling point

const boiling = (num) => {
    if (num < 212){
        return `${num} is below boiling point`
    }else if (num > 212){
        return `${num} is above boiling point`
    }else{
        return `${num} is at boiling point`
    }
}

const temperature1 = 42
// Expected output: "42 is below boiling point"
//console.log(boiling(temperature1))
const temperature2 = 350
// Expected output: "350 is above boiling point"
//console.log(boiling(temperature2))
const temperature3 = 212
// Expected output: "212 is at boiling point"
//console.log(boiling(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//Create a function with two parameters
//Each parameter is an array
//Create a variable an assign it to both arrays combined
//Use concat method
//Return the length using .length

const lengthOfArray = (arr1, arr2) => {
    let combined = arr1.concat(arr2);
    return combined.length;
}

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
//console.log(lengthOfArray(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
//Create a function with a string as the parameter
//Create a variable and assign it to the current string converted into an array
//Use the split method
//Use the reverse method to reverse the elements in the array
//Return the string in reversed using the join method 

const reversedString = (str) => {
    let reversed = str.split('').reverse()
    return reversed.join('')
}

const currentCohort = "Echo 2023"
//console.log(reversedString(currentCohort))
// Expected output: "3202 ohcE"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//Create a function with array and number as parameters
//return the last index of array using lastIndexOf method

const findLastIndex = (arr, num) => {
    return arr.lastIndexOf(num)
}

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
//console.log(findLastIndex(numberOfConnections, givenValue1))
// Expected output: 7

const givenValue2 = 10
//console.log(findLastIndex(numberOfConnections, givenValue2))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//Create a function with an array as parameter
//Return the array sorted from largest to smallest using sort method

const sortedArray = (arr) => {
    return arr.sort((a,b) => b - a)
}

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
//console.log(sortedArray(sanDiegoSummerTemperatures))
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
//console.log(sortedArray(sanDiegoWinterTemperatures))
// Expected output: [68, 67, 66, 66, 62, 59, 59]
