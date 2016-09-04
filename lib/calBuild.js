'use strict'

const { buildMonthArray } = require('./datesBuild')

// const calLines = 6
const pad = ' '
let weekString = ''


const weekBuilder = (num, index, array) => {
	weekString += `${num}${pad}`
	if (index === 6) {
		weekString.trim()
		weekString += `\n`
	} else if (index === 13) {
		weekString.trim()
		weekString += `\n`
	} else if (index === 20) {
		weekString.trim()
		weekString += `\n`
	} else if (index === 27) {
		weekString.trim()
		weekString += `\n`
	} else if (index === 34) {
		weekString.trim()
		weekString += `\n`
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

buildCal(1, 2016)

// ORIGINAL CODE FROM FRIDAY
// const fullMonth = buildMonthArray(monthNum, year)
// let weekString = ''
// console.log("fullMonth", fullMonth);
// for (let i = 0; i < fullMonth.length; i++) {
// 	if (weekString.length < 20) {
// 		if (i < 6) {
// 		weekString += `${fullMonth[i]}${pad}`
// 		} else if (i === 7) {
// 		weekString += `${fullMonth[i]}`
// 		}
// 	}
// }