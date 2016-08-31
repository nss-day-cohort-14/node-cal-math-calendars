'use strict';

const { getDayOfWeek } = require('./zeller')
const { getCurrentMonth, getSpecificMonth, getMonthName } = require('./month')
const { getYear } = require('./year')
const { months, dayCount, dayName } = require('./data')

//console.log(getSpecificMonth('15')) //pass in a date
getMonthName(4);


// Set if statement to test if month argument is at least 1 and at most 12


// const [,,...args] = process.argv
//
// let _year = parseInt(args[0]),
//     _month = parseInt(args[1]),
//     _date = parseInt(args[2])
//
//
// const dayOfDate = getDayOfWeek(_year, _month, _date)
