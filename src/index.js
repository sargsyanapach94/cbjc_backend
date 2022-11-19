const initDb = require('./db/initDb');
const initModels = require('./models/initModels')
const initRoutes = require('./routes/initRoutes')

module.exports = (app) => {
    const sequelizeDb = initDb();
    initModels(sequelizeDb);
    console.log(sequelizeDb.models.Bible_translations.findAll);

    initRoutes(app, sequelizeDb.models)

};
