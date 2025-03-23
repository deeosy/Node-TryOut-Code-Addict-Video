const {readFile, writeFile} = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-blowing.txt', `THIS IS AWESOME: ${first}, ${second}`, {flag:'a'})
        console.log(`${first},  ${second}`); 
 
        
    } catch (error) {
        console.log(error);
    }
  }

start()



// but we can import the promise function from the 'util' module from node.js
// const util = require('util');
// const readFilePromise =util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8')
//         const second = await readFilePromise('./content/second.txt', 'utf8')
//         await writeFilePromise('./content/result-mind-blowing.txt', `THIS IS AWESOME: ${first}, ${second}`)
//         console.log(`${first},  ${second}`); 

        
//     } catch (error) {
//         console.log(error);
//     }
//   }

// start()


// // this is how a promise function is written from scratch
// const getText = (path)=>{
    //     return new Promise((resolve, reject) => {
        //         readFile(path, 'utf8', (err, data) => {
            //           if(err){
                //             reject(err)
                //           }else{
  //             resolve(data);
  //           }
  //         })
  //     })
  // }
  
  
    // getText('./content/first.txt')
    //   .then(result => console.log(result))
    //   .catch(err => console.log(err))


  // const start = async () => {
  //     try {
  //         const first = await getText('./content/first.txt')
  //         const second = await getText('./content/second.txt')
  //         console.log(`${first},  ${second}`);
          
  //     } catch (error) {
  //         console.log(error);
  //     }
  //   }
