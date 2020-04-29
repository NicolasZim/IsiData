const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const industries = await connection('industries').select('*');

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

    await connection('industries').insert({
      id,
      name,
      cnpj_cpf,
      email,
      telephone,
      username,
      password,
    });

    return response.json({ username, password });
  },
};
