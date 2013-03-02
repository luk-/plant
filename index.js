var Stream = require('stream')

var plant = function (data, html) {

  var keys = typeof data === 'object' && Object.keys(data) || [];

  keys.forEach(function (key) {
    var r = new RegExp('{{' + key + '}}', 'g')
    var d = data[key]

    Array.isArray(d) ? d = d.join(' &amp; ') : ''

    html = html.replace(r, function () {
      if (d) return d
    })

  })

  return html
}

module.exports = function (data, html) {

  if (!html) {
    var stream = new Stream
    stream.writable = stream.readable = true
    var htmlBuffer = ''
    stream.write = function (buf) {
      htmlBuffer += buf.toString()
    }
    stream.end = function () {
      stream.writable = false
      this.emit('data', plant(data, htmlBuffer))
    }
    return stream
  }

  return plant(data, html)
}
