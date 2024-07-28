// Prototype is used to make own methods in javaScript


/* 
    Everything in javaScript, is goes by inherit Object.
    it means, if you make any Array String Function all have the property of the Object.
    Array, String, Function can use all the methods of the Object. 
*/


//So, if make any method in object using prototype then i can use it in Array, String, Function.

function user(){    
    console.log(`koushik from user`);
}

user.prototype.printAge = function(){
    console.log(19);
}

//user.printAge();
/*
    If you try to run the above line (line no. -21) then it will give you an error.

    because, `printAge` is a prototype method of `user`, not a static method of the 
    `user` function. When you try to call `user.printAge()`, it fails because `pritAge`
    is not a direct property of `user`.
*/


let u = new user();         //The `new` keyword in JavaScript is used to create instances of objects from a constructor function. 
/*
    When we write the above line several steps will work in the behind---->
    1. "Creating a New Object:"   ```let u = {};  ```
    2. "Setting the Prototype:"   ```u.__proto__ = user.prototype;  ```
    3.  "Binding this and Calling the Constructor:"   ```user.call(u);  ```   <--- this step only call the constructor function and bind this
    4.  "Returning the New Object:"



    NOTE: ``` let u = new user; ``` works and is equivalent to ``` let u = new user(); ```
     when the constructor function (line no.- 13) takes no arguments.
*/


u.printAge();

/*
let u1 = {};
console.log(user.prototype);
u1.__proto__ = user.prototype;  ----> After this step, `u1` have `printAge` method from `user` object. 

u1.printAge();

console.log(typeof (new user()));  -----> this will return a Object for that reason we have create a Object to store it.

*/