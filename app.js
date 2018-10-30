const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.send(req.headers))
app.get('/headersinfo', (req, res) => res.send(req.headers))

app.listen(port, () => console.log(`App running on port ${port}!`))
