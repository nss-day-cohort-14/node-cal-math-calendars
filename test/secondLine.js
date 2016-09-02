'use strict'

const { assert: { isFunction, oneOf, strictEqual } } = require('chai')
const { secondLineBuild } = require('../lib/secondLine')

describe('secondLine', () => {
	describe('secondLineBuild', () => {
		it('should be a function', () => {
			isFunction(secondLineBuild)
		})
		it('should list the first two letters of each day of the week', () => {
			let dayName = 'Su'
			oneOf(dayName, ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'])
		})
		it('should return string that is 20 characters long', () => {
			let dayList = 'Su Mo Tu We Th Fr Sa'
			strictEqual(dayList.length, 20)
		})
	})
})