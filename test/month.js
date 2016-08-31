'use strict';

const { assert: { isFunction, strictEqual, isNumber, isBelow, isAtLeast } } = require('chai')

const { getCurrentMonth, getSpecificMonth, getMonthName } = require('../lib/month')

describe('month', () => {
  describe('getCurrentMonth', () => {
    it('should be a function', () => {
      isFunction(getCurrentMonth)
    })
    it('returns the current month as a numeral', () => {
      isNumber(getCurrentMonth())
    })
  })
  describe('getSpecificMonth', () => {
    it('should be a function', () => {
      isFunction(getSpecificMonth)
    })
    it('should handle an argument', () => {
      let monthNumber = '5'
      strictEqual(getSpecificMonth(monthNumber), 5)
    })
    it('should return the given month as a numeral', () => {
      let month = '3'
      strictEqual(getSpecificMonth(month), 3)
    })
    it('should take an argument less than 13', () => {
      let month = '3'
      isBelow(getSpecificMonth(month), 13)
    })
    it('should take an argument greater than 0', () => {
      let month = '6'
      isAtLeast(getSpecificMonth(month), 1)
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
