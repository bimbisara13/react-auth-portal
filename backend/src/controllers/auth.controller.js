const users = require('../data/users')
const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwt')
const { generateAccessToken, generateRefreshToken } = require('../utils/token')

let refreshTokens = []

exports.login = (req, res) => {
  if (req.body.username === 'trigger500')
    return res.status(500).json({ message: 'Simulated server error' })

  const { username, password } = req.body

  const user = users.find(
    (u) => u.username === username && u.password === password
  )
  if (!user) return res.status(401).json({ message: 'Invalid credentials' })

  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  refreshTokens.push(refreshToken)

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'strict',
    secure: false,
    maxAge: 10 * 60 * 1000,
  })

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: 'strict',
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  })

  res.json({
    user: {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    },
  })
}

exports.refresh = (req, res) => {
  const refreshToken = req.cookies.refreshToken

  if (!refreshToken || !refreshTokens.includes(refreshToken))
    return res.sendStatus(403)

  jwt.verify(refreshToken, jwtConfig.refreshTokenSecret, (err, user) => {
    if (err) return res.sendStatus(403)

    const accessToken = generateAccessToken(user)

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
      maxAge: 10 * 60 * 1000,
    })

    res.sendStatus(200)
  })
}

exports.logout = (req, res) => {
  const refreshToken = req.cookies.refreshToken

  refreshTokens = refreshTokens.filter((t) => t !== refreshToken)

  res.clearCookie('accessToken')
  res.clearCookie('refreshToken')

  res.sendStatus(204)
}
