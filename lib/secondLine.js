'use strict'

const { dayName } = require('./data')
const pad = ' '

// Second Line of Cal
module.exports.secondLineBuild = () => {
	const dayList = dayName.join(pad)
	process.stdout.write(`${dayList}\n`)	
}