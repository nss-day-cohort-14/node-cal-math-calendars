'use strict'

const { getMonthName } = require('./month')
const { getSpecificYearMonth } = require('./year')
//const { getDayOfWeek } = require('./zeller')

// This is placeholder vars for testing
const yearInput = 2004 // args[1]
const monthInput = 10 // args[0]
const dayInput = 1

const pad = ' '
const calWidth = 20

const [ year, month ] = getSpecificYearMonth(yearInput, monthInput)


// First Line of Cal
// module.exports.firstLineBuild = (year, month) => {

	const monthName = getMonthName(month)
	let leftOver; // gets leftover space from top line of cal

	const getLeftover = (month) => {
		leftOver = calWidth - (pad.length + year.toString().length) - month.length
	}
	getLeftover(monthName);

	let leftEnd //works out how large the left padding needs to be
	const makeEnds = (leftoverSpace) => {
		leftEnd = leftoverSpace / 2
		leftEnd = Math.floor(leftEnd)
	}

	makeEnds(leftOver)

	let leftPadArr = [] // adds spaces to an array
	const addPad = (lefty) => {
		for (let i = 0; i < lefty; i++) {
			leftPadArr.push(pad)
		}
	}
	addPad(leftEnd)
	// joins spaces in array into a string of spaces
	const leftPad = leftPadArr.join('')

	// Refactor to a variable to be returned for mvp
	process.stdout.write(`${leftPad}${monthName} ${year}\n`)

	module.exports = { getLeftover, makeEnds, addPad }
// }

