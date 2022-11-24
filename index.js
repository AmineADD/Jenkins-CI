const express = require('express')
require('dotenv').config();
var ip = require('ip');
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Jenkins TP7 EFREI!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${ip.address()}`)
})