// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alt-flavour')
// require('./7-mind-grenade')

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

const _ = require('lodash')

const items = [1, [2, [3, [4, [5, [6]]]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)