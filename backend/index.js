const express = require('express');

const app = express();

app.get('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Teste',
    nome: 'Leonardo',
  });
});

app.listen(3333);
