'use strict';

const [,, ...args] = process.argv

const { getMonthDays } = require('./days')
const { getCurrentMonth, getMonthName } = require('./month')
const { getCurrentYear, getSpecificYearMonth } = require('./year')
const { getDayOfWeek, congruence, modifiedYear, modifiedMonth } = require('./zeller')


const yearInput = args[0]
const monthInput = args[1]
const dayInput = args[2]


console.log('currentYear', getCurrentYear())
console.log("getSpecificYearMonth", getSpecificYearMonth(yearInput, monthInput));

console.log('dayOfWeek', getDayOfWeek(yearInput, monthInput, dayInput))

console.log('monthDays', getMonthDays(monthInput, yearInput))

console.log('currentMonth', getCurrentMonth())

console.log('monthName', getMonthName(monthInput))



