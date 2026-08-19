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

