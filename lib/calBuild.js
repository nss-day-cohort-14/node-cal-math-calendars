'use strict'

const { buildMonthArray } = require('./datesBuild')

// const calLines = 6
const pad = ' '
let weekString = ''
let weekReturn = 6

const weekBuilder = (num, index, array) => {
	weekString += `${num}${pad}`
	if (index === weekReturn) {
		weekString.trim()
		weekString += `\n`
		weekReturn = weekReturn + 7
	} else if (index === weekReturn) {
		weekString.trim()
		weekString += `\n`
		weekReturn = weekReturn + 7
	}
}

const buildCal = (monthNum, year) => {
	const fullMonth = buildMonthArray(monthNum, year)
	console.log("fullMonth", fullMonth);
	fullMonth.forEach(weekBuilder)

	console.log("weekStringweekString")
	console.log(weekString)
	console.log(weekString.length)
}

buildCal(3, 2016)
