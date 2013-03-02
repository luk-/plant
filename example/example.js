var fs = require('fs')
var plant = require('../')

var html = fs.readFileSync('./index.html', 'utf8')

var matrix = {
  title: 'great plant example',
  header: 'pretty cool header',
  paragraph: 'pretty rad paragraph imo'
}

var output = plant(matrix, html)

console.log(output)


