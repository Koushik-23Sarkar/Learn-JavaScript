const path = require("node:path");

console.log(__dirname); //return path of the directory (return type string)
console.log(__filename);    //return path of the filename (return tyrp string)

const baseNameFileName = path.basename(__filename);  //return basename of the path ---- file name
const baseNameFolderName = path.basename(__dirname); //return basename of the path ---- folder name

const extOfFile = path.extname(__filename); //return extention of the file // but for folder it will retunr nothing 
const extOFFolder = path.extname(__dirname); //it will return nothing (return type "String")

const a = path.parse(__dirname);    //return an object whose properties represent significant elements of the path
const b = path.parse(__filename);   //return an object whose properties represent significant elements of the path


//path.format() ----> return a path but we have to give an object

const checkIsAbsolute1 = path.isAbsolute(__filename);  //check is the path absolute or Not (return a boolean value)
const checkIsAbsolute2 = path.isAbsolute("../README.md");


//path.join()   ----> to join 
//path.resolve()    ----> work just like path.join(), but if "/" occurs later in the sequence, result will 
//                        consider that as the root and ignore the previous path.


