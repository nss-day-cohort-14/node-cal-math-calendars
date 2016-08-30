/*
Zeller's congruence
  h is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
  q is the day of the month
  m is the month (3 = March, 4 = April, 5 = May, ..., 14 = February)
  K the year of the century (year % 100).
  J is the zero-based century ( Math.floor(year / 100) )
    For example, the zero-based centuries for 1995 and 2000 are 19 and 20 respectively
    (to not be confused with the common ordinal century enumeration which indicates 20th for both cases).
*/
const currentDayOfWeek = (year, month, day) => {
let   q = day,
      m = month

      if (m === 1) {
        year -= 1
        m = 13
      }
      if (m === 2) {
        year -= 1
        m = 14
      }

let   K = (year % 100),
      J = Math.floor(year / 100)
      // console.log('q', q, 'm', m, 'K', K, 'J', J);

  return Math.floor((q + ((13 * (m + 1)) / 5) + K + (K / 4) + (J / 4) + (5 * J) ) % 7)
}
const h = currentDayOfWeek(2016, 8, 22)

console.log('DAY OF THE WEEK:', h)
