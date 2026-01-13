const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwt')

/**
 * Middleware to authenticate requests using a JWT access token.
 *
 * Checks for the access token in cookies (`accessToken`).
 * If the token is valid, attaches the decoded user info to `req.user`.
 * If the token is missing or invalid, responds with the appropriate HTTP status:
 *   - 401 Unauthorized: No token provided
 *   - 403 Forbidden: Invalid or expired token
 */
function authenticateToken(req, res, next) {
  const token = req.cookies.accessToken

  if (!token) return res.sendStatus(401)

  jwt.verify(token, jwtConfig.accessTokenSecret, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports = authenticateToken
