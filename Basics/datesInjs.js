// let date=new Date()
// console.log(date);
// console.log(date.toString());
// console.log(typeof date);
// console.log(date.toLocaleDateString());
// let newdate=new Date(2023,0,23)
// let newdate=new Date(2023,0,23,5,3)
// let newdate=new Date("27-05-2001")
// console.log(newdate.toLocaleString());


let myTimesStamp=Date.now()
// console.log(myTimesStamp);
// console.log(newdate.getTime());


// console.log(Math.floor(Date.now()/1000));
let newdate=new Date()
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

newdate.toLocaleString('default', {
    weekday:"long"
})
