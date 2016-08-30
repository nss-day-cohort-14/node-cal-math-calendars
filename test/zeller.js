'use strict';

const { exec } = require('child_process')
const { assert: { strictEqual, isFunction } } = require('chai')

const { getDayOfWeek, modifiedYear, modifiedMonth } = require('../lib/zeller')
describe('zeller', () => {
  describe('getDayOfWeek', () => {
    it('should be a function', () => {
      isFunction(getDayOfWeek)
    })
    it('should return a sunday indexed day of the week', () => {
      strictEqual(getDayOfWeek(2016, 8, 1), 1)
    })
  })
  describe('modifiedMonth', () => {
    it('should be a function', () => {
      isFunction(modifiedMonth)
    })
    it('should handle January', () => {
      strictEqual(modifiedMonth(1), 13)
    })
    it('should handle February', () => {
      strictEqual(modifiedMonth(2), 14)
    })
    it('should handle March', () => {
      strictEqual(modifiedMonth(3), 3)
    })
  })
  describe('modifiedYear', () => {
    it('should be a function', () => {
      isFunction(modifiedMonth)
    })
    it('should handle January', () => {
      strictEqual(modifiedYear(2000, 1), 1999)
    })
    it('should handle February', () => {
      strictEqual(modifiedYear(2000, 2), 1999)
    })
    it('should handle March', () => {
      strictEqual(modifiedYear(2000, 3), 2000)
    })
  })
})
