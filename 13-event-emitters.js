// how to write event listeners in backend or Node.js
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id} `);
})

customEmitter.on('response', () => { // we can have as many functions listening to the same events
    console.log(`some other logic here `);
  })
customEmitter.emit('response','hannah', 34) // but note this line (.emit) ends the listening event thus has to be at the bottom. order matters here
