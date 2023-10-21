// const name="bharat"
// const repoCount=50
// console.log(name + repoCount +" value");

// console.log(`Hello My name is ${name} and m repo count is ${repoCount} `);
const gameName=new String ("bharat-gf")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase())
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('r'));

const nweString =gameName.substring(0,3)
console.log(nweString);

const another=gameName.slice(-8,4)
console.log(another);

const newStringOne="    kjshflsdf.     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://Bharat.com/bharat%20bist"
console.log(url.replace('%20','-'));

console.log(url.includes('rat'));
console.log(gameName.split('-'));
