'use strict';

const { getDayOfWeek } = require('./zeller')
const { getMonth } = require('./month')
const { getYear } = require('./year')

console.log(getMonth()) //pass in a date
console.log(getYear())

// const [,,...args] = process.argv
//
// let _year = parseInt(args[0]),
//     _month = parseInt(args[1]),
//     _date = parseInt(args[2])
//
//
// const dayOfDate = getDayOfWeek(_year, _month, _date)
