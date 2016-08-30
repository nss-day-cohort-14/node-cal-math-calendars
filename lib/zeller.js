'use strict';

module.exports.modifiedMonth = month => month < 3 ? month + 12 : month

module.exports.modifiedYear = (year, month) => month < 3 ? year - 1 : year

module.exports.congruence = (year, month, day) => {
  const q = day,
        m = module.exports.modifiedMonth(month),
        y = module.exports.modifiedYear(year, month)

  const h =
    (q
    + Math.floor((13 * (m + 1)) / 5)
    + y
    + Math.floor(y / 4)
    - Math.floor(y / 100)
    + Math.floor(y / 400))
    % 7

    return h
}

module.exports.getDayOfWeek = (year, month, day) => (
  (module.exports.congruence(year, month, day) + 6) % 7
)
