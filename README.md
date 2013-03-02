# plant ![plant](http://i.imgur.com/216Z8Na.png)

<br>

Simple and fast multi-paradigm streaming templating.

<br>

# Description

Plant is a templating 'engine' based around the idea that working with templates should *not* be a complex task, with templating tools not doing much at all other than filling in the blanks. That's where plant comes in. It just seeds data from an object into an html template with matching keys. Because flexibility is a good thing and streams are a great way to work with IO, plant can be used in both a functional style and as a stream. Check out the examples for more details.

# Example

The best way to use plant is to pipe a file stream to it:

Given we're using an `index.html` file with the following contents:

```
<head>
  <title>{{title}}</title>
</head>
<body>
  <h1>{{header}}</h1>
  <p>{{paragraph}}</p>
</body>
```

```javascript
var plant = require('plant')
var fs = require('fs')

var data = {
  title: 'streaming plant',
  header: 'streams are pretty neat',
  paragraph: 'and plants are nice to eat'
}

var planted = plant(data)

fs.createReadStream('./index.html').pipe(planted).pipe(process.stdout)
```

This will send the following to stdout (or whatever writable stream you want to send it to):

```html
<head>
  <title>streaming plant</title>
</head>
<body>
  <h1>streams are pretty neat</h1>
  <p>and plants are nice to eat</p>
</body>
```



If you're dealing with files in a synchronous manner or if you're templating strings, you can use plant like this:

Given we're using an index.html file with the following contents:

```html
<head>
  <title>{{title}}</title>
</head>
<body>
  <h1>{{header}}</h1>
  <p>{{paragraph}}</p>
</body>
```

```javascript
var plant = require('plant')

var html = fs.readFileSync('./index.html', 'utf8')
var data = {
  title: 'Synchronous example',
  header: 'Don\'t use sync',
  paragraph: 'things to put in the paragraph'
}

var planted = plant(data, html)
console.log(planted)
```

Your output will look like this:

```html
<head>
  <title>Synchronous example</title>
</head>
<body>
  <h1>Don't use sync</h1>
  <p>things to put in the paragraph</p>
</body>
```


# Install:
`npm install plant`

# Test:
`npm test`

#License:
MIT
