'use strict';

module.exports.dayCount = []

for (let i = 1; i < 32; i++) {
  module.exports.dayCount.push("" + i + "")
}

module.exports.dayName = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.months = [
  {
    name: 'January',
    numDays: '31'
  },
  {
    name: 'February',
    numDays: '28',
    long: '29'
  },
  {
    name: 'March',
    numDays: '31'
  },
  {
    name: 'April',
    numDays: '30'
  },
  {
    name: 'May',
    numDays: '31'
  },
  {
    name: 'June',
    numDays: '30'
  },
  {
    name: 'July',
    numDays: '31'
  },
  {
    name: 'August',
    numDays: '31'
  },
  {
    name: 'September',
    numDays: '30'
  },
  {
    name: 'October',
    numDays: '31'
  },
  {
    name: 'November',
    numDays: '30'
  },
  {
    name: 'December',
    numDays: '31'
  }
];
