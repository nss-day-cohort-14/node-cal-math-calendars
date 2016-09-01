'use strict';

const { assert: { isFunction, strictEqual, isNumber, isBelow, isAtLeast } } = require('chai')

const { getCurrentMonth, getMonthName } = require('../lib/month')

describe('month', () => {
  describe('getCurrentMonth', () => {
    it('should be a function', () => {
      isFunction(getCurrentMonth)
    })
    it('returns the current month as a numeral', () => {
      isNumber(getCurrentMonth())
    })
  })
  describe('getMonthName', () => {
    it('should be a function', () => {
      isFunction(getMonthName)
    })
    it('should return a string', () => {
      let monthNum = 5
      let expected = 'May'
      strictEqual(getMonthName(monthNum), expected)
    })
  })
})
