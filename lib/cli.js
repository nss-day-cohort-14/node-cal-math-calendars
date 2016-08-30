'use strict';

const { zellerCon } = require('./zeller')

const [,,...args] = process.argv

let _year = parseInt(args[0]),
    _month = parseInt(args[1]),
    _date = parseInt(args[2])


const dayOfDate = zellerCon(_year, _month, _date)
