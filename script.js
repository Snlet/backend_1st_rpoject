const express = require('express')
const app = express()
const path = require('path')


app.set('view engine' , 'ejs')


app.use( express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/contact', function (req, res) {
    res.render('index1')
  })

app.listen(3000)