const path = require('path')

// this returns the seperator depending on your platform
console.log(path.sep);  // ans = '\' based on windows os

//join method
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);

// basename method
const base = path.basename(filePath)
console.log(base);

// resolve method which gives us the absolute location of the file we are targeting
const absolute = path.resolve(__dirname, '/content','subfolder','test.txt' )
console.log(absolute);

