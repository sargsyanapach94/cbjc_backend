const { Sequelize } = require('sequelize');
const path = require('path')

const storage = path.normalize(__dirname + '/bible_v1.4.17.db');

module.exports = () => {
  const sequelizeDB = new Sequelize('bible', '', '', {
      dialect: 'sqlite',
      storage,
      transactionType: 'IMMEDIATE',
      // disable logging; default: console.log
      logging: false
  });

  // try {
  //     await sequelize.authenticate();
  //     console.log('Connection has been established successfully.');
  // } catch (error) {
  //     console.error('Unable to connect to the database:', error);
  // }

  return sequelizeDB;
};
