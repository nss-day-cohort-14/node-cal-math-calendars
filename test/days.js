'use strict';

const { assert: {isFunction, strictEqual, isNumber} } = require('chai')

const { getMonthDays } = require('../lib/days')
describe('days', () => {
  describe('getMonthDays', () => {
    it('should be a function', () => {
      isFunction(getMonthDays)
    })
    it('should take one argument', () => {
      let monthNum = '5'
      let year = 2001
      strictEqual(getMonthDays(monthNum, year), 31)
    })
    it('should return a numeral', () => {
      let monthNum = 5
      let year = 2001
      let expected = 31
      isNumber(getMonthDays(monthNum, year), expected)
    })
    it('should handle months with 31 days (January, March, May, July, August, October, and December)', () => {
      let monthNum = 3
      let year = 2001
      let expected = 31
      strictEqual(getMonthDays(monthNum, year), expected)
    })
    it('should handle months with 30 days (April, June, September, and November)', () => {
      let monthNum = 4
      let year = 2001
      let expected = 30
      strictEqual(getMonthDays(monthNum, year), expected)
    })
    it('should handle February', () => {
      let monthNum = 2
      let year = 2001
      let expected = 28
      strictEqual(getMonthDays(monthNum, year), expected)
    })
    it('should handle February in a leap year', () => {
      let monthNum = 2
      let year = 1900
      let expected = 29
      strictEqual(getMonthDays(monthNum, year), expected)
    })
  })
})
