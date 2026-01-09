const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/auth.routes')
const protectedRoutes = require('./routes/protected.routes')

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/', protectedRoutes)

module.exports = app
