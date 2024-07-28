function setUserName(username){
    this.username = username;
}

function createUser(username,email,password){
    setUserName(username);

    this.email = email,
    this.password = password
}

const u1  = new createUser('koushik','koushik@gmail.com',12341234);//how `new` keyword works is explained in the `ProtoType` folder
console.log(u1);    
/* Output---->
createUser { email: 'koushik@gmail.com', password: 12341234 }


    In `u1` object, no `username` property in there. But we actually call a function to set the `username`

    it is happened because, when we call `setUserName` function, it will go to the callStack, store the value of 
    `username` in the `username` of `setUserName` and when the execusion is completed, the `setUserName` will 
    removed from the callStack. For that reason we cannot get the `username` in `createUser` function.
*/



/*
    To solve that problem, we have to tell the `setUserName` function to store the `username` in 
    the `username` of `createUser` function.

    to tell that think, we use `call()` and  `this` keyword.
*/


//--------------------------------------------------------------------------------------------------------------


function setUserName1(username){
    this.username = username;
}

function createUser1(username,email,password){
    setUserName1.call(this,username);  //In that way, we actually, tell the `setUserName1` function 
                                       // to store the value of `username` to the `username` of `createUser` function.   

    this.email = email,
    this.password = password
}

const u2  = new createUser1('koushik','koushik@gmail.com',12341234);//how `new` keyword works is explained in the `ProtoType` folder
console.log(u2);  

