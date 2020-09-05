const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database/database.sqlite'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.close()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

