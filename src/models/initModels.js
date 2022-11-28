const books = require('./Books');
const chapters = require('./Chapters');
const Bibletranslations = require('./BibleTranslations');

const initModels = (sequelizeDb) => {
    books(sequelizeDb);
    chapters(sequelizeDb);
    Bibletranslations(sequelizeDb);
}

module.exports = initModels
