const books = require('./Books');
const chapters = require('./Chapters');
const BibleTranslations = require('./BibleTranslations');

const initModels = (sequelizeDb) => {
    books(sequelizeDb);
    chapters(sequelizeDb);
    BibleTranslations(sequelizeDb);
}

module.exports = initModels
