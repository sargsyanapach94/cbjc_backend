const Bibletranslations = require('./BibleTranslations');
const books = require('./Books');
const chapters = require('./Chapters');

const initModels = (sequelizeDb) => {
    console.log('initModels');
    const force = false;

    const trModel = Bibletranslations(sequelizeDb, force);
    const booksModel = books(sequelizeDb, force);
    const chaptersModel = chapters(sequelizeDb, force);
}

module.exports = initModels
