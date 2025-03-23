const { log } = require('console')
const {readFile} = require('fs')  // importing async readFile from fs

console.log('started a 1st task');

//check file path !!
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }else{
        console.log(result);
        console.log('completed first task');
    }
})

console.log('starting next task');


