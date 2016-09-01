'use strict'

const { assert: { isFunction } } = require('chai')

const { getLeftover } = require('../lib/chain')

describe('chain', () => {
	describe('getLeftover', () => {
		it('should be a function', () => {
			isFunction(getLeftover)
		})
	})
})