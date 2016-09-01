'use strict';

// Need to pull this out to cli
const [,, ...args] = process.argv

const { getMonthDays } = require('./days')
const { getCurrentMonth, getMonthName } = require('./month')
const { getCurrentYear, getSpecificYearMonth } = require('./year')
const { getDayOfWeek, congruence, modifiedYear, modifiedMonth } = require('./zeller')
const { dayName } = require('./data')

// have a setter function for month and year that cli can call

const yearInput = 2004 // args[1]
const monthInput = 10 // args[0]
const dayInput = 1

const pad = ' '
const calWidth = 20


// First Line of Cal
const [ year, month] = getSpecificYearMonth(yearInput, monthInput)
console.log("lookin", month)
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

process.stdout.write(`${leftPad}${monthName} ${year}\n`)


// Second Line of Cal
const dayList = dayName.join(pad)
process.stdout.write(`${dayList}\n`)

module.exports = { getLeftover, makeEnds, addPad }
