'use strict'

const { assert: { isFunction, isString, isNumber, oneOf } } = require('chai')
const { getLeftover, makeEnds, addPad } = require('../lib/firstLine')

// const { getLeftover, makeEnds, addPad } = require('../lib/chain')

describe('firstLine', () => {
	describe('firstLineBuild', () => {
		describe('getLeftover(month)', () => {
			it('should be a function', () => {
				isFunction(getLeftover)
			})
			it('should take one argument which is a string', () => {
				let month = 'August'
				isString(month)
			})
			it('should take one argument which is a monthName', () => {
				let month = 'August'
				oneOf(month, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
			})
			it('should return a numeral', () => {
				let leftOver = 9
				isNumber(leftOver)
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
		describe('addPad(leftEnd)', () => {
			it('should be a function', () => {
				isFunction(addPad)
			})
			it('should take one argument which is a numeral', () => {
				let leftEnd = 6
				isNumber(leftEnd)
			})
		})	
	})
})
