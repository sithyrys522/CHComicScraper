const express = require('express')
const bodyParser = require('body-parser')
//const router = require('router')
const app = express()
const port = 3000
var path = require('path')
const scrape = require('./scrape');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.post('/', (req, res) => {
    scrape.getComic(req.body.comicNumber);
    res.send('You posted!')
})

app.get('/test.html', (req, res) => {
    res.send('Hello Test!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})