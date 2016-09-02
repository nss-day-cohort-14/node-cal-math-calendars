'use strict';

module.exports.getCurrentYear = () => (new Date()).getFullYear()

module.exports.getSpecificYearMonth = (yearNum, monthNum) => {
  let specificMonth = (new Date(yearNum, monthNum)).getMonth()
  let specificYear = (new Date(yearNum, monthNum)).getFullYear()
  let yM = [specificYear, specificMonth]
  return yM
};
