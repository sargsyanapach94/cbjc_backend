const initBibleTranslations = require('./bibleTranslations');
const initBooks = require('./books');

module.exports = (app, models) => {
   
    const trRouter = initBibleTranslations(models);
    app.use('/translations', trRouter);
    const booksRouter = initBooks(models);
    app.use('/books', booksRouter);
};
