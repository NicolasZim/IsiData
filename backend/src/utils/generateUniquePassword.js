const bcrypt = require("bcrypt")

module.exports = function generateUniquePassword() {
  return bcrypt.genSalt(10)
}
