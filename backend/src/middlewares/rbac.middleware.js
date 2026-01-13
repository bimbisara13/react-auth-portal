/**
 * Middleware to enforce RBAC.
 *
 * @param {string} role - The required role to access the route (e.g., 'admin').
 * @returns {Function} - Express middleware function that checks user's role.
 *
 *  - If req.user.role matches the required role, the request proceeds
 *  - If not, responds with 403 Forbidden
 */
function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) return res.sendStatus(403)
    next()
  }
}

module.exports = authorizeRole
