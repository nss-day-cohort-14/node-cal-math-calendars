'use strict'

const { buildMonthArray } = require('./datesBuild')

const calLines = 6
const pad = '.'

const buildCal = (monthNum, year) => {
	const fullMonth = buildMonthArray(monthNum, year)
	let weekString = ''
	console.log("fullMonth", fullMonth);
	for (let i = 0; i < fullMonth.length; i++) {
		if (weekString.length < 20) {
			if (i < 6) {
			weekString += `${fullMonth[i]}${pad}`
			} else if (i === 7) {
			weekString += `${fullMonth[i]}`
			}
		}	
	}
	console.log("weekStringweekString")
	console.log(weekString)
}

buildCal(4, 2016)