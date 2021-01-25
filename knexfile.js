// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "banco",
      user:"postgres",
      password: "23516496"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
