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
        .json({ error: 'No industry found with this Username/Password' });
    }
    return response.json(industry);
  },
};
