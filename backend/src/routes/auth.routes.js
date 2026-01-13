const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

/**
 * POST /auth/login
 * Authenticate a user with username, password and return access & refresh tokens.
 */
router.post('/login', authController.login)

/**
 * POST /auth/refresh
 * Issue a new access token using a valid refresh token.
 */
router.post('/refresh', authController.refresh)

/**
 * POST /auth/logout
 * Log out the user by invalidating their refresh token.
 */
router.post('/logout', authController.logout)

module.exports = router
