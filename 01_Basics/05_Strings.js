const name = "prashanth";
const repoCount = 50;
// console.log(name + repoCount+"value");  for concatination this syntax is outdated , use backticks `` for interpollation

console.log(`Hello, My name is ${name} and repo count is ${repoCount}.`);

//another way of declaring string
const myName = new String("prashanth-Bhisetti-com");

console.table([name,myName]);
console.log(name); //prashanth

console.log(myName); // [String: 'prashanth']
console.log(myName.__proto__); //{} object
console.log(myName.length); //gives the length of the string
console.log(myName.toUpperCase()); //PRASHANTH
console.log(myName.toString()); //prashanth -> returns like string
console.log(myName.charAt(2)); //if we give the index number it will return what character at that position.
console.log(myName.indexOf('s')); //it returns index value of mentioned character
const newString = myName.substring(0,9); //remember 9th letter will not include here means upto 9 will be given as substring
console.log("newString :",newString);

const anotherString = myName.slice(-18,-9); //supports negative indexing
console.log("anotherString :",anotherString);


const string1 = "       Hello       ";
console.log(string1);
console.log(string1.trim()); //it removes spaces around the string value

const url = "https://prashanth%20bhisettti.com/prashu%20space"
console.log(url.replace("%20","_")); //it only replace value first match of %20 with _ .
console.log(url.replaceAll("%20","_")); //it replaces all the values %20 with _ .
console.log(url.includes('prashanth')); // it checks strictly so if you give P instead of p then it returns false.

const strSplit = "Hi Prashanth, How are you!";
console.log(strSplit.split(" ")); //splits the sentence by space and gives as an array
//result:  [ 'Hi', 'Prashanth,', 'How', 'are', 'you!' ]
console.log(strSplit.split()); // gives complete sentence as a one element in the array
//result: [ 'Hi Prashanth, How are you!' ]

console.log(myName.split("-")) // "prashanth-Bhisetti-com" it separates based on  - character.
//result : [ 'prashanth', 'Bhisetti', 'com' ]
