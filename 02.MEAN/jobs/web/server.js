'use strict'

const express = require('express')
const compression = require('compression')
const app = express()
const isProduction = process.env.NODE_ENV === 'production'
const cacheOption = isProduction ? { maxAge: '1d' } : {}
const port = process.env.PORT || 4000

app.disable('x-powered-by')

app.use(compression())

app.use('/', express.static(isProduction ? 'dist' : 'src', cacheOption))

app.listen(port, () => console.log(`Listen on ${port}`))
