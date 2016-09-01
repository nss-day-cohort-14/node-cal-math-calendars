'use strict';

const { months } = require('./data')

module.exports.getCurrentMonth = () => {
  return (new Date()).getMonth() + 1
}

// module.exports.getSpecificMonth = (monthNum) => {
//   // this returns the month numeral indexed from zero
//   // ex. January = 0, February = 1
//   // return (new Date(monthNum)).getMonth() + 1
  // return (new Date(2000, monthNum)).getMonth()
// }

module.exports.getMonthName = (monthNum) => {
	// monthNum -= 1
	let monthName = months[monthNum].name
  return monthName
}
