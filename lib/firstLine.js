'use strict'

const { getMonthName } = require('./month')
const { getSpecificYearMonth } = require('./year')
//const { getDayOfWeek } = require('./zeller')

const [,,...args] = process.argv

// This is placeholder vars for testing
const yearInput = '2000'      //args[1]
const monthInput = '5'     // args[0]
// const dayInput = 1

const pad = ' '
const calWidth = 20

const [ year, month ] = getSpecificYearMonth(yearInput, monthInput)
const monthName = getMonthName(month)


// First Line of Cal

// gets leftover space from top line of cal
const getLeftover = (_year, _month) => {
	let leftOver = calWidth - (pad.length + _year.toString().length) - _month.length
	return leftOver
}

// let leftEnd //works out how large the left padding needs to be
const makeEnds = (leftoverSpace) => {
	let leftEnd = leftoverSpace / 2
	leftEnd = Math.floor(leftEnd)
	return leftEnd
}

// joins spaces in array into a string of spaces
const addPad = (lefty) => {
	let leftPadArr = [] // adds spaces to an array
	for (let i = 0; i < lefty; i++) {
		leftPadArr.push(pad)
	}
	let leftPad = leftPadArr.join('')
	return leftPad
}

const firstLinePad = (_year, _monthName) => {
	let leftOverSpaces = getLeftover(_year, _monthName)
	let makeLeftSpace = makeEnds(leftOverSpaces)
	let makeLeftPadding = addPad(makeLeftSpace)
	return makeLeftPadding
}

// const buildFirstLine = firstLinePad(year, monthName)
// process.stdout.write(`${buildFirstLine}${monthName} ${year}\n`)

// Refactor to a variable to be returned for mvp

module.exports = { getLeftover, makeEnds, addPad, firstLinePad }
