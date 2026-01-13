const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwt')

/**
 * Generate a JWT to be used as an access token.
 * Access tokens typically have a short lifespan and include user info.
 *
 * @param {Object} user - The user object containing at least `id` and `role`.
 * @returns {string} - Signed JWT access token.
 */
function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role },
    jwtConfig.accessTokenSecret,
    { expiresIn: jwtConfig.accessTokenExpiry }
  )
}

/**
 * Generate a JWT to be used as a refresh token.
 * Refresh tokens are longer-lived and only include minimal info (user ID).
 *
 * @param {Object} user - The user object containing at least `id`.
 * @returns {string} - Signed JWT refresh token.
 */
function generateRefreshToken(user) {
  return jwt.sign({ id: user.id }, jwtConfig.refreshTokenSecret, {
    expiresIn: jwtConfig.refreshTokenExpiry,
  })
}

module.exports = { generateAccessToken, generateRefreshToken }
