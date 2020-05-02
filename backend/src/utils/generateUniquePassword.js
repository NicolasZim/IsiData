const bcrypt = require('bcrypt');

module.export = async function generateUniquePassword() {
  //const { password } = request.body

  return await bcrypt.hash(password, 10);
};

//await bcrypt.compare(password, hashedPassword);
