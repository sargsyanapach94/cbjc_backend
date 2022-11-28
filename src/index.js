const initDb = require('./db/initDb');
const initModels = require('./models/initModels');

const index = require('./routes');
const booksRouter = require('./routes/books');
const chaptersRouter = require('./routes/chapters');
const bibleTranslations = require('./routes/bibleTranslations');

module.exports = app => {
    const bibleDb = initDb();
    initModels(bibleDb);
    app.set('bibleDb', bibleDb);

    app.use('/', index);
    app.use('/books', booksRouter);
    app.use('/chapters', chaptersRouter);
    app.use('/translations', bibleTranslations);
};
