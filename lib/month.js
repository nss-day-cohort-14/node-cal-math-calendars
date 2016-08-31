'use strict';

module.exports.getCurrentMonth = () => {
  return (new Date()).getMonth() + 1
}

module.exports.getSpecificMonth = (monthNum) => {
  // this returns the month numeral indexed from zero
  // ex. January = 0, February = 1
  return (new Date(monthNum)).getMonth() + 1
}
