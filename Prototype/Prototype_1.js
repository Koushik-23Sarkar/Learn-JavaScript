function user(){    
    console.log(`koushik from user`);
}

Object.prototype.printMe = function(){
    console.log("Hello from Object");
}
Function.prototype.printMe1 = function(){
    console.log("Hello from function");
}
user.printMe1();

