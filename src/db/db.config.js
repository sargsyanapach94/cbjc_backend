const path = require('path');
const storage = path.normalize(__dirname + '/bible_v1.4.17.db');

module.exports = {
    dialect: 'sqlite',
    storage,
    transactionType: 'IMMEDIATE',
    // disable logging; default: console.log
    logging: false
};