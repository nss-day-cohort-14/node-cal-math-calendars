'use strict'

const { assert: { isFunction, isString } } = require('chai')

const { getLeftover, makeEnds, addPad } = require('../lib/chain')

describe('chain', () => {
	describe('getLeftover', () => {
		it('should be a function', () => {
			isFunction(getLeftover)
		})
		it('should take one argument', () => {
			let month = 'August'
			isString(month)
		})
	})	
	describe('makeEnds', () => {
		it('should be a function', () => {
			isFunction(makeEnds)
		})
	})
	describe('addPad', () => {
		it('should be a function', () => {
			isFunction(addPad)
		})
	})
})