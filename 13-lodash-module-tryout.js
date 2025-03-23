 // yarn init
 // yarn init -y
 
 const _ = require('lodash')

 const items = [1,[2,[3,[4]]]]
 const newItems = _.flattenDeep(items)  // lodash has this method which returns a single array 
 console.log(newItems);
 