var fs = require('fs')
var plant = require('../')
var test = require('tap').test

var output = fs.readFileSync(__dirname + '/output.html' ,'utf8')

var matrix = {
  title: 'great plant example',
  header: 'pretty cool header',
  paragraph: 'pretty rad paragraph imo'
}

test('using plant a typical function', function (t) {
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8')
  var planted = plant(matrix, html)

  t.same(planted, output)
  t.end()
})

test('piping an html template to plant', function (t) {
  var planted = plant(matrix)
  fs.createReadStream(__dirname + '/index.html').pipe(planted)
  planted.on('data', function (data) {
    t.same(data, output)
    t.end()
  })
})
