'use strict';

const { getDayOfWeek } = require('./zeller')
const { dayCount, months } = require('./data')
const { getMonthDays } = require('./days')

const pad = ' ' // 1 space
const emptyDate = '  ' // 2 spaces

// module.exports.determineDateAmount = (monthName, year) => {
//   if(monthName === months[1].name && )
// }

// gets number of emptyDates to append to monthArray
const getEmptyDateAmount = (year, month) => {
  let firstDay = getDayOfWeek(year, month, 1)
  let emptyDateAmount = firstDay
  return emptyDateAmount // how many emptyDates we need
}

// builds array of emptyDates and number of days in given month
const buildMonthArray = (monthNumber, year) => {
  let readyMonthArr = []
  let numberOfDays = getMonthDays(monthNumber, year) // days in a month
  console.log(numberOfDays)
  let emptySpace = getEmptyDateAmount(year, monthNumber) // number of spaces
  let firstDay = emptySpace
  for (let i = 0; i < emptySpace; i++) {
    readyMonthArr.push(emptyDate)
  }
  for (let j = 1; j <= numberOfDays; j++) {
    readyMonthArr.push(j)
  }
  // console.log(readyMonthArr)
  return readyMonthArr
}

module.exports = { getEmptyDateAmount, buildMonthArray };
