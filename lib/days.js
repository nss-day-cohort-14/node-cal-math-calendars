'use strict';

const { months, dayName, dayCount } = require('./data')

module.exports.getMonthDays = (monthNum, year) => {
  monthNum -= 1
  let monthDays;
  if (monthNum === 1 && (year % 4) === 0 && (year % 100) !== 0) {
    monthDays = months[monthNum].leap 	
  } else if (monthNum === 1 && (year % 400) === 0) {
  	monthDays = months[monthNum].leap 	
  } else {
    monthDays = months[monthNum].numDays
  }
  return monthDays
};

// base code
// module.exports.getMonthDays = (monthNum, year) => {
//   monthNum -= 1
//   let monthDays;
//   if (monthNum === 1 && (year % 4) === 0) {
//     monthDays = months[monthNum].leap
//   } else {
//     monthDays = months[monthNum].numDays
//   }
//   return monthDays
// };
