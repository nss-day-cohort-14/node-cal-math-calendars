'use strict';

const { months } = require('./data')

module.exports.getCurrentMonth = () => {
  return (new Date()).getMonth() + 1
}

module.exports.getMonthName = (monthNum) => {
	// monthNum -= 1
	let monthName = months[monthNum].name
  return monthName
}
