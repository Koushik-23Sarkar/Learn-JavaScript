const kou = Object.getOwnPropertyDescriptor(Math,"PI");   //To get more information about that 'PI' , porperty of 
                                                          // 'Math' object. 

const koushik = {
    name : "kouhsik",
    age : 20
}
Object.defineProperty(koushik , 'name',{    //to change the property of the 'name' of 'koushik' object
    writable: false,                        //If ' writable : false ' , we cannot change the value of koushik.name
    enumerable: true,                       // if ' enumerable : false ' , we cannot iterate that key of the 'koushik' object
    configurable: true
});

const bh  = Object.getOwnPropertyDescriptor(koushik , 'name');

console.log(Object.entries(koushik)[0]);