var fs = require('fs')
var plant = require('../')

var matrix = {
  title: 'great plant example',
  header: 'pretty cool header',
  paragraph: 'pretty rad paragraph imo'
}

var p = plant(matrix)

fs.createReadStream('./index.html').pipe(p).pipe(process.stdout)
