'use strict';

const { months } = require('./data')

module.exports.getCurrentMonth = () => {
  return (new Date()).getMonth()
}

module.exports.getMonthName = (monthNum) => {
	let monthName = months[monthNum].name
  return monthName
}
