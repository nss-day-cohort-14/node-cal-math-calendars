'use strict';

const { assert: { isFunction, strictEqual } } = require('chai')

const { getMonth } = require('../lib/month')

describe('month', () => {
  describe('getMonth', () => {
    it('should be a function', () => {
      isFunction(getMonth)
    })
    it('returns the current month as a numeral', () => {

    })
  })
})
