module.exports = {
    development: {
      username: 'postgres',
      password: null,
      database: 'temer_development',
      host: '127.0.0.1',
      dialect: 'postgres',
      port: 5432,
      dialectOptions: { decimalNumbers: true }
    },
    test: {
      username: 'postgres',
      password: null,
      database: 'temer_test',
      host: '127.0.0.1',
      dialect: 'postgres',
      logging: false,
      port: 5432,
      dialectOptions: { decimalNumbers: true }
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      dialectOptions: { decimalNumbers: true }
    }
};