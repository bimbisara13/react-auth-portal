const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role },
    jwtConfig.accessTokenSecret,
    { expiresIn: jwtConfig.accessTokenExpiry }
  );
}

function generateRefreshToken(user) {
  return jwt.sign(
    { id: user.id },
    jwtConfig.refreshTokenSecret,
    { expiresIn: jwtConfig.refreshTokenExpiry }
  );
}

module.exports = { generateAccessToken, generateRefreshToken };
