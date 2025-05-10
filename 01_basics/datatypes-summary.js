// primitive (they pass by value)
// strings,number,symbol,null,undefined,boolean,bigInt
// Refernce (Non primitive) they pass by reference
// array,object function
let str="Jatt"
const num=123
const uniqueId=Symbol(1234)
const uniqueId2=Symbol(1234)
let undef;
let ans=true
let bigNum=123456543n
let movies=["Blackia","Dakuaan Da Munda"]
let funnct=function(){
    console.log("Hello world");
    
}
let obj={name:"Jaskaran",age:19}
console.log(typeof str);
console.log(typeof num);
console.log(typeof uniqueId);
console.log(uniqueId==uniqueId2);//prints false because symbool provides uniqueness
console.log(typeof undef);
console.log(typeof ans);
console.log(typeof null);
console.log(typeof bigNum);
console.log(typeof movies);//prints object
console.log(typeof obj);
console.log(typeof funnct);
