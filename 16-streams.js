const {createReadStream} = require('fs')

const stream =createReadStream('./content/big.txt', {highWaterMark: 900000,encoding: 'utf-8'})

//default the buffer is 64kb
// last buffer - remainder
// highWaterMark - control size of the buffer
// const stream = createReadStream('./content/big.txt', {highWaterMark})

stream.on('data', (result) => {
  console.log(result);
  
})
stream.on('error', (err) => {
  console.log(err);
  
})