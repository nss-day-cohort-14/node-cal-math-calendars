'use strict';

const { assert: { isFunction, strictEqual, isNumber, equal, isArray }} = require('chai')

const { getCurrentYear, getSpecificYearMonth } = require('../lib/year')

describe('year', () => {
  describe('getCurrentYear', () => {
    it('should be a function', () => {
      isFunction(getCurrentYear)
    })
    it('returns the current year as a numeral', () => {
      isNumber(getCurrentYear())
    })
  })
  describe('getSpecificYearMonth', () => {
      it('should be a function', () => {
      isFunction(getSpecificYearMonth)
    })
    it('should handle 2 arguments', () => {
      let yearNumeral = '1990'
      let monthNum = '2'
      strictEqual(getSpecificYearMonth(yearNumeral, monthNum), [1990, 2])
    })
    it('should handle an argument four digits in length', () => {
      let yearNumeral = '1996'
      equal(yearNumeral.length, 4)
    })
    it('should return the an array', () => {
      let year = '2000'
      let month = '2'
      isArray(getSpecificYearMonth(year, month))
    })
  })
})
