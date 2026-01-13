const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/auth.routes')
const protectedRoutes = require('./routes/protected.routes')

const app = express()

/**
 * The origin can be dynamically set to match the clien't current port.
 */
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

/*
 * Middleware to parse incoming JSON and Cookie requests.
 */
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/', protectedRoutes)

module.exports = app
