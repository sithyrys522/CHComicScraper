const express = require('express')
const app = express()
const port = 3000
var path = require('path')
const scrape = require('./scrape');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.post('/', (req, res) => {
    scrape.getComic(5639);
    res.send('You posted!')
})

app.get('/test.html', (req, res) => {
    res.send('Hello Test!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})