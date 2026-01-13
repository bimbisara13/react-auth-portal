require('dotenv').config()

/**
 * JWT configuration that stores secret and expiry times for access and refresh tokens.
 */
module.exports = {
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  accessTokenExpiry: '10m',
  refreshTokenExpiry: '1d',
}
