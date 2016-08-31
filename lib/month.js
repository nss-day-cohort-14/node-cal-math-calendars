'use strict';

const { months } = require('./data')

module.exports.getCurrentMonth = () => {
  return (new Date()).getMonth() + 1
}

module.exports.getSpecificMonth = (monthNum) => {
  // this returns the month numeral indexed from zero
  // ex. January = 0, February = 1
  return (new Date(monthNum)).getMonth() + 1
}

module.exports.getMonthName = (monthNum) => {
	console.log('name', months[4].name)
	console.log(monthNum)
	//monthNum -= 1
	console.log(monthNum)
	let monthName = months[monthNum].name
}
