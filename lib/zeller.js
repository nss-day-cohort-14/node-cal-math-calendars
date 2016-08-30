'use strict';

module.exports.zellerCon = (year, month, day) => {
  let   q = day,
        m = month

        if (m < 3) {
          year--;
          m += 12
        };

  let   K = (year % 100),
        J = Math.floor(year / 100)
        // console.log('q', q, 'm', m, 'K', K, 'J', J);

  return Math.floor((q + ((13 * (m + 1)) / 5) + K + (K / 4) + (J / 4) + (5 * J) ) % 7)
}
