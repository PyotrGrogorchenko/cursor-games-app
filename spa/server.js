const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const app = express()

app.use(express.static(path.join(__dirname, '../dist')))
app.use(favicon(path.join(__dirname, '../dist/static/main_logo_7vj_icon.ico')))

app.use('/', express.static(path.join(__dirname, '../dist/index.html')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Application is started on localhost:', port)
})
