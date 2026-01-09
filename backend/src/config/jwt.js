require('dotenv').config()

module.exports = {
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  accessTokenExpiry: '10m',
  refreshTokenExpiry: '1d',
}
