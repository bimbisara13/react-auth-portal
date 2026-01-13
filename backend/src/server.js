require('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT || 4000

/**
 * Start the server and listen for incoming requests on the specified port.
 * The callback logs a message to confirm that the server is running.
 */
app.listen(PORT, () => {
  console.log(`Auth API running on port ${PORT}`)
})
