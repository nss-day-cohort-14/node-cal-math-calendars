'use strict';

const { assert: { isFunction, strictEqual, isNumber, isArray } } = require('chai')

const { determineDateAmount, getEmptyDateAmount, lineBuild, buildMonthArray } = require('../lib/datesBuild')

describe('datesBuild', () => {
  // describe('determineDateAmount', () => { // says how many dates need to be on calendar
  //   it('should be a function', () => {
  //     isFunction(determineDateAmount)
  //   })
  //   it('should take 1 argument of a month name (from months.name)', () => {
  //     let monthName = 'August'
  //     isString(monthName, 'Must be month name')
  //   })
  //   it('should also take an argument of a year', () => {
  //     let year = 2000
  //     lengthOf(year.toString(), 4)
  //   })
  //   it('should return a numeral (from months.numDays)', () => {
  //     let monthName = 'May'
  //     let year = 2000
  //     isNumber(determineDateAmount(monthName, year), 31)
  //   })
  //   it('if a leap year, should return a numeral (months.leap)', () => {
  //     let monthName = 'February'
  //     let year = 2000
  //     isNumber(determineDateAmount(monthName, year), 29)
  //   })
  // })
  describe('getEmptyDateAmount', () => {
    // determine how many empty dates needed at beginning of month
    it('should be a function', () => {
      isFunction(getEmptyDateAmount)
    })
    it('should return a numeral', () => {
      let year = 2000
      let month = 5
      isNumber(getEmptyDateAmount(year, month, 1), 1)
    })
  })
  describe('buildMonthArray', () => {
    it('should be a function', () => {
      isFunction(buildMonthArray)
    })
    it('should handle a numeral as an argument', () => {
      let dayOfWeek = 3
      isNumber(dayOfWeek)
    })
    it('should return an array', () => {
      let dayOfWeek = 3
      let readyMonthArr = buildMonthArray(dayOfWeek)
      isArray(readyMonthArr)
    })
  })
  describe.skip('lineBuild') // make string of 20 chars
})
