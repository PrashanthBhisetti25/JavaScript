//-----------------------const Keyword ----------------
const accountId = 65;
// accountId =78;  -> you can't change the variable value if that is defined with const key word.
// console.log("accountId : ",accountId);

//------------------------var Keyword -------------
var name = "prashanth";
name = "Prashanth Bhisetti"; // If the variable is defined with var keyword then you can change the value of that variable as many times you want.
// console.log("name : ",name);

// -> We are no longer using var keyword because if we define variable with var we don't know the scope of the variable
//if we change the value of that variable in one place it effected to all so we don't have a scope for that variable

//------------------------let Keyword -----------------
let email = "prashanth@gmail.com";
email = "prashanth.123@gmail.com"
// console.log("email : ",email);

let accountState; //if we print gives undefined as result
console.table([accountId,name,email,accountState]);

//-> let variable rectifies the scope problem it provides block scope variable usage.