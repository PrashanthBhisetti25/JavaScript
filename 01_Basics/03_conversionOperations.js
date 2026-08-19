//-----------------------------------Conversions-----------------

//number conversion
let score = "55abc";
console.log(typeof score); //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN 

// what if we give score like 55abc -> it's not a number but it's type givenlike number value of it is NaN


/* conversions
"55"  -> 55
"55abc"  -> NaN
true -> 1 ; false ->0
*/

//boolean conversion

let isLoggedIn = 1;
let isTeacher = "Prashanth";
let isEmpty = "";
console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.table([typeof booleanIsLoggedIn,booleanIsLoggedIn,Boolean(isTeacher),isTeacher,Boolean(isEmpty),isEmpty]);

// how boolean works
// 1 -> true ; 0 -> false
// "" -> false ; "Prashanth" -> true
//

//string conversion
let someNumber = 55;
let stringNumber = String(someNumber);  // 55 -> "55"
console.table([someNumber,typeof stringNumber, stringNumber]);

//--------------------Operations--------------------------------

let value = 3;
let newVal = -value;
console.log(newVal);
console.table([2+3,2-3,2%3,2/3,2*4,2**3]);

let str1 = "prashanth";
let str2 = " bhisetti";
let name = str1+str2;
console.table([name,"1"+2,1+"2","1"+2+3,1+2+"3"]);

// console.log(2*3%5/(4**2)-7); //don't write messy code use parenthesis
console.table([+true,+""]);

let num1,num2,num3;
num1=num2=num3 =2+2;

let gameCounter = 100;
console.table([++gameCounter,gameCounter++]);