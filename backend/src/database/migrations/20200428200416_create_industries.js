exports.up = function (knex) {
  return knex.schema.createTable('industries', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('cnpj_cpf', 14).notNullable();
    table.string('email').notNullable();
    table.string('telephone').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('industries');
};
