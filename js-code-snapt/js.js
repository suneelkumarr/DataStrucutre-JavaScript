//Shuffle an Array

/*----------------------------------------------------------------
Shuffling an array is super easy with sort and random methods.
*/

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(shuffleArray([1, 2, 3, 4]));
// Result: [4, 3, 2 ,1]


//Check if Date is Valid
/*
 Use the following snippet to check if a given date is valid or not.
*/

const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid("December 17, 1995 03:24:00");
console.log(isDateValid("December 17, 1995 03:24"))
// Result: true


//Copy to Clipboard
/*
Easily copy any text to clipboard using navigator.clipboard.writeText. 
*/
// const copyToClipboard = (text) => navigator.clipboard.writeText(text);
// copyToClipboard("Hello World");


//Find the day of the year
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date());
console.log(dayOfYear(new Date()))
// Result: 272

//Capitalize a String

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
capitalize("follow for more")
console.log(capitalize("follow for more"))
// Result: Follow for more


//Find the number of days between two days
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
dayDif(new Date("2020-10-21"), new Date("2021-10-22"))

console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-22")))
// Result: 366


// /Clear All Cookies
// const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

//Generate Random Hex
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex());
// Result: #92b008

//Remove Duplicated from Array

const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]


//Get Query Params from URL
// const getParameters = (URL) => {
//     URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
//     return JSON.stringify(URL);
//   };
//   getParameters(window.location)
  // Result: { search : "easy", page : 3 }

//  Log Time from Date
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// Result: "17:30:00"

// /Check if a number is even or odd

const isEven = num => num % 2 === 0;
console.log(isEven(2)); 
// Result: True

//Find Average of Numbers
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
average(1, 2, 3, 4);
// Result: 2.5

//Check if the array is empty
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
isNotEmpty([1, 2, 3]);
// Result: true

//Get Selected Text

const getSelectedText = () => window.getSelection().toString();
getSelectedText();


//Detect Dark Mode

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
console.log(isDarkMode) // Result: True or False