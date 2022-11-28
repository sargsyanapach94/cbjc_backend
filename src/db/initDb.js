const { Sequelize } = require('sequelize');

const config = require('./db.config');

module.exports = () => {
  const bibleDb = new Sequelize('bible', '', '', config);

  // try {
  //     await sequelize.authenticate();
  //     console.log('Connection has been established successfully.');
  // } catch (error) {
  //     console.error('Unable to connect to the database:', error);
  // }

  return bibleDb;
};
