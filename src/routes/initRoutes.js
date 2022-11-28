const initBibleTranslations = require('./bibleTranslations');
const initBooks = require('./books');
const initChapters = require('./chapters');


module.exports = (app, models) => {
    const trRouter = initBibleTranslations(models);
    app.use('/translations', trRouter);
    const booksRouter = initBooks(models);
    app.use('/books', booksRouter);
    const chaptersRouter = initChapters(models);
    app.use('/chapters', chaptersRouter);
};
