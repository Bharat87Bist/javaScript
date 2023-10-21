//primitive data types 
// 7 : String,number , boolean, null,undefined, symbol,bigInt

// reference type(non primitive datatypes)
// array, objects , functions
const score=100;
const scorevalue=2003.22
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigInt=23479237492746297367823n;


// references 
const heros=["shaktiman","naajraj","doga"]
let myObj={ 
    name:"bharat",
age:33

}
const myfunction=function()
{
    console.log("hello World");
}

console.log(typeof bigInt);
console.log(typeof outsideTemp);
console.log(typeof myfunction);
console.log(typeof anotherId);

