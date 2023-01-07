const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config()
const { createClient } = require('redis')

const routes = require('./routes')
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000

const redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

app.use(cors('*'))

app.use(express.json()) //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })) //Parse URL-encoded bodies
app.use(morgan('combined'))
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
