'use strict';

const { getDayOfWeek } = require('./zeller')

const [,,...args] = process.argv

let _year = parseInt(args[0]),
    _month = parseInt(args[1]),
    _date = parseInt(args[2])


const dayOfDate = getDayOfWeek(_year, _month, _date)
