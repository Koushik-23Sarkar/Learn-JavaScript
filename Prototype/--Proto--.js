const a1 = {
    name: "koushik",
    age: 19
}

const b1 = {
    printMe : function(){
        console.log("Koushk from b1 object");
    }
}


a1.__proto__ =b1;       //a1 object will inherit all the property of the b1 object 
                        // it means, a1 can use all the method and properties of the b1.

//a1.printMe();


//-----------------------Modern Syntex---------------------------------------------

const a2 = {
    name: "koushik from a2 object",
    age: 45
}

const b2 ={
    power: "fire",
    name : "koushik form b2 object",
    age: 67,
    printMe2: function(){
        console.log(`name: ${this.name} and Age: ${this.age}`);
    }
}

Object.setPrototypeOf(a2,b2);   //this is the modern syntex of `__proto__`
                                //In there, `a2` will inherit all the methods and properties of the `b2`
                                //If both have same method and properties then it will execute own propertices and methods
                                
                                
console.log(a2.age);