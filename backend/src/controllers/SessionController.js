const { compare } = require('bcrypt');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { username, password } = request.body;

    const industry = await connection('industries')
      .where('username', username)
      .where('password', password)
      .first();

    if (!industry) {
      return response
        .status(400)
        .json({ error: 'Industry not found.' });
    }

    const passwordIsEqual = await compare(password, industry.password);  

    if (!passwordIsEqual) {
      throw Error('Password its wrong');
    }

    delete industry.password;


    return response.json(industry);
  },
};
