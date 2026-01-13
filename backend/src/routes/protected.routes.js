const express = require('express')
const router = express.Router()

const authenticateToken = require('../middlewares/auth.middleware')
const authorizeRole = require('../middlewares/rbac.middleware')

/**
 * These protected routes require authentication and specific roles.
 * Access is controlled using middleware:
 *   - authenticateToken: verifies the user's access token
 *   - authorizeRole(role): checks if the user has the required role
 */

/**
 * GET /admin
 * Accessible only to authenticated users with the 'admin' role.
 * Responds with admin-specific data.
 */
router.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Admin data' })
})

module.exports = router
