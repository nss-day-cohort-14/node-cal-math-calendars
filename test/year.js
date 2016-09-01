'use strict';

const { assert: { isFunction, strictEqual, isNumber, equal }} = require('chai')

const { getCurrentYear, getSpecificYear } = require('../lib/year')

describe('year', () => {
  describe('getCurrentYear', () => {
    it('should be a function', () => {
      isFunction(getCurrentYear)
    })
    it('returns the current year as a numeral', () => {
      isNumber(getCurrentYear())
    })
  })
  describe('getSpecificYear', () => {
      it('should be a function', () => {
      isFunction(getSpecificYear)
    })
    it('should handle 2 arguments', () => {
      let yearNumeral = '1990'
      let monthNum = '2'
      strictEqual(getSpecificYear(yearNumeral, monthNum), 1990)
    })
    it('should handle an argument four digits in length', () => {
      let yearNumeral = '1996'
      equal(yearNumeral.length, 4)
    })
    it('should return the given year as a numeral', () => {
      let year = '2000'
      let month = '2'
      isNumber(getSpecificYear(year, month))
    })
  })
})
