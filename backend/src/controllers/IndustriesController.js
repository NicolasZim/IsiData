//const generateUniquePassword = require("../utils/generateUniquePassword")
const connection = require('../database/connection');

const bcrypt = require('bcrypt');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const industries = await connection('industries')
      .offset((page - 1) * 5)
      .select('*');

    return response.json(industries);
  },

  async create(request, response) {
    const {
      id,
      name,
      cnpj_cpf,
      email,
      telephone,
      username,
      password,
    } = request.body;

    const salt = 10;

    await bcrypt.hash(password, salt, async (errBcrypt, hash) => {
      if (errBcrypt) {
        return response.status(500).json({ error: 'Error Bcrypt' });
      }
    });
    await connection('industries').insert({
      id,
      name,
      cnpj_cpf,
      email,
      telephone,
      username,
      hash,
    });
    return response.json({ username, hash });
  },
};
