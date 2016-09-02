'use strict'

const { assert: { isFunction, isString, isNumber } } = require('chai')

const { getLeftover, makeEnds, addPad } = require('../lib/chain')

describe('chain', () => {
	describe('getLeftover(month)', () => {
		it('should be a function', () => {
			isFunction(getLeftover)
		})
		it('should take one argument which is a string', () => {
			let month = 'August'
			isString(month)
		})
	})	
	describe('makeEnds(leftOver)', () => {
		it('should be a function', () => {
			isFunction(makeEnds)
		})
		it('should take one argument which is a numeral', () => {
			let leftOver = 6
			isNumber(leftOver)
		})
	})
	describe('addPad', () => {
		it('should be a function', () => {
			isFunction(addPad)
		})
	})
})