'use strict';

const { months } = require('./data')

module.exports.getCurrentMonth = () => {
  return (new Date()).getMonth()
}

module.exports.getMonthName = (monthNum) => {
	monthNum = Number(monthNum)
	console.log(monthNum)
	let monthName = months[monthNum - 1].name
  return monthName
}
