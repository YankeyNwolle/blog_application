const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('blog application')
})

app.listen(port, () => {
  console.log(` l application demarre sur le port : ${port}`)
})