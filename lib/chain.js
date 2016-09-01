'use strict';

const [,, ...args] = process.argv

const { getMonthDays } = require('./days')
const { getCurrentMonth, getMonthName } = require('./month')
const { getCurrentYear, getSpecificYearMonth } = require('./year')
const { getDayOfWeek, congruence, modifiedYear, modifiedMonth } = require('./zeller')
const { dayName } = require('./data')


const yearInput = args[1]
const monthInput = args[0]
const dayInput = 1 // args[2]

const dayPad = ' '
const calWidth = 20


// First Line of Cal
const [ year, month] = getSpecificYearMonth(yearInput, monthInput)
const monthName = getMonthName(month)

let leftOver; // gets leftover space from top line of cal
const getLeftover = (month) => {
	leftOver = calWidth - (dayPad.length + year.toString().length) - month.length
	console.log("leftOver", leftOver);
}
getLeftover(monthName);

let leftEnd //works out how large the left padding needs to be
const makeEnds = (leftoverSpace) => {
	if (leftoverSpace % 2 === 0) {
		leftEnd = leftoverSpace / 2
	} else {
		leftEnd = (leftoverSpace - 1) / 2
	}
}

makeEnds(leftOver)

let leftPadArr = [] // adds spaces to an array
const addPad = (lefty) => {
	for (let i = 0; i < lefty; i++) {
		leftPadArr.push(dayPad)
	}
}
addPad(leftEnd)
// joins spaces in array into a string of spaces 
const leftPad = leftPadArr.join('')

process.stdout.write(`${leftPad}${monthName} ${year}\n`)


// Second Line of Cal
const dayList = dayName.join(dayPad)
//console.log(dayList.length)
process.stdout.write(`${dayList}\n`)
