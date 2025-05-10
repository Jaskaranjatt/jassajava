console.log(null>0);//prints 0
console.log(null==0); //prints 0 because == operator works different tha <or >or<=or>=
console.log(null>=0);//prints 1
console.log(undefined<0);//prints 0
console.log(undefined==0);//prints 0
console.log(undefined>=0);//prints 0
console.log("02"==2) //prints1 because it converts string to nuumber byitself
console.log("2dfgh"==2)//prints 0because string coverts to Nan
console.log("2"===2);//prints 0 because === also check the datatype
console.log(2===2); //prints 1
