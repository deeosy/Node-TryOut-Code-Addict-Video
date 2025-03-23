//started operating system process
console.log('first');
setTimeout(() => { // setTime Out is async and gets off loaded (sent to the back of the line)
  console.log('second');
},0)
console.log('third');
console.log('four');
//completed and exited operating system process

