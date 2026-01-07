const users = require("../data/users");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");

let refreshTokens = [];

exports.login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  refreshTokens.push(refreshToken);

  res.json({
    accessToken,
    refreshToken,
    user: { id: user.id, username: user.username, firstName: user.firstName, lastName: user.lastName, role: user.role }
  });
};

exports.refresh = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken || !refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, jwtConfig.refreshTokenSecret, (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  });
};

exports.logout = (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter(token => token !== refreshToken);
  res.sendStatus(204);
};
