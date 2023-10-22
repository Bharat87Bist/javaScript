//. Arrays
const myarray=[0,1,2,3,4,5]
const myHeros= ["shiktaman", "najaaraj","kjsdhfsd"]
const myarr=new Array(1,2,3,4,5,6,6)
// console.log(myarray[3]);
//.  arrays methods

// myarr.push(4)
// myarr.push(7)
// console.log(myarr);
// myarr.pop()
// console.log(myarr);
// myarr.unshift(9)
// myarr.shift()
// console.log(myarr.includes(5));
// console.log(myarr.indexOf(6));
// const newarr=myarr.join()
// console.log(myarr);
// console.log(typeof newarr);

//  slice ,splice
console.log("A",myarr);
const myn1=myarr.slice(1,3)

console.log(myn1);
console.log("A",myarr);

const myn2=myarr.splice(1,3)
console.log("C",myarr);

console.log(myn2);