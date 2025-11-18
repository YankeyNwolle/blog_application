const express = require('express')
const app = express()

const port = 3000

app.use(express.static('public'))
app.use(express.static('images'))

app.get("/", (req, res) => {
  app.render("/")
})

app.set("views","./views")
app.set("view engine", "ejs")

app.listen(port, () => {
  console.log('Serveur en écoute...')
})