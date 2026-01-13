/**
 * In-memory user database
 *
 * This array simulates a user store for authentication and role-based access.
 * Each user object contains:
 *   - id: unique numeric identifier
 *   - username: login name
 *   - password: plaintext password
 *   - firstName, lastName: user's personal info
 *   - role: 'admin' or 'user' for RBAC
 */

const users = [
  {
    id: 1,
    username: 'bimbisara',
    password: 'admin@123',
    firstName: 'Bimbisara',
    lastName: 'P',
    role: 'admin',
  },
  {
    id: 2,
    username: 'john',
    password: 'user@123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'user',
  },
]

module.exports = users
