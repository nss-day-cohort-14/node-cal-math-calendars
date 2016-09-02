'use strict';

const dayCount = []

for (let i = 0; i < 32; i++) {
  if (i < 10) {
    dayCount.push(` ${i}`)
  } else {
    dayCount.push(`${i}`)
  }
}

const dayName = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const months = [
  {
    name: 'January',
    numDays: 31
  },
  {
    name: 'February',
    numDays: 28,
    leap: 29
  },
  {
    name: 'March',
    numDays: 31
  },
  {
    name: 'April',
    numDays: 30
  },
  {
    name: 'May',
    numDays: 31
  },
  {
    name: 'June',
    numDays: 30
  },
  {
    name: 'July',
    numDays: 31
  },
  {
    name: 'August',
    numDays: 31
  },
  {
    name: 'September',
    numDays: 30
  },
  {
    name: 'October',
    numDays: 31
  },
  {
    name: 'November',
    numDays: 30
  },
  {
    name: 'December',
    numDays: 31
  }
];

module.exports = { months, dayName, dayCount };
