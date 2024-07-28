// Function.prototype.call()

/*
    the ` call() ` method of Function instances calls this fucntion will a given `this` value and 
    arguments provided individually.
*/

/*
    If you don't understand the above line, it is ok.

    ` call() ` basically use to give the value of `this` in the function that you want to execute.
    
    If you have a function that define using `this` keyword then we have to use `call()` to tell that 
    function, what that `this` is.
*/

const obj1 = {
    name: "koushik from obj1",
    age: 18
}

const obj2 = {
    name: "koushik from obj2",
    age: 56
}

function printMe(email){
    console.log(`email: ${email}`);
    console.log(`name: ${this.name} and age: ${this.age}`);
}



printMe.call("koushik@gmail.com");
/*  Output--->
email: koushik@gmail.com
name: undefined and age: undefined


    In there, `name` and `age` is not defined because, `printMe` function
    actually don't understand which `name` and `age` you want to use.
*/

//to tell the PrintMe function which `name` and `age` we want to use, we have to tell it

/*
    we have to use `call()` and specify the object so that, function can understand which  `name` 
    and `age ` we want to use. 
*/

printMe.call(obj1,"koushik@gmail.com")
/*  Output--->
email: koushik@gmail.com
name: koushik from obj1 and age: 18
*/
