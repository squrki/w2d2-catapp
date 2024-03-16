const express = require('express')
const axios = require('axios').default
const app = express()

const catRouter = require('./routes/cats')

app.use('/cats', catRouter)
app.set('view engine', 'ejs')

//to start program: `npm run dev`

app.listen(3000)

