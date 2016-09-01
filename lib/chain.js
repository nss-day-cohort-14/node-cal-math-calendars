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
let leftOver;

const titleCenter = (month) => {
	leftOver = calWidth - (dayPad.length + year.toString().length) - month.length
	console.log("leftOver", leftOver);
}

titleCenter(monthName)
let ends = (leftOver * daypad) / 2

process.stdout.write(`${monthName} ${year}\n`)


// Second Line of Cal
const dayList = dayName.join(dayPad)
//console.log(dayList.length)
process.stdout.write(`${dayList}\n`)





