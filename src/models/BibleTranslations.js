const {
    Sequelize,
    DataTypes
} = require('sequelize');

module.exports = (sequelize, force) => {
    const BibleTranslations = sequelize.define('Bible_translations', {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        translator_name: {
            type: DataTypes.STRING,
            unique: true,
        },
        translator_abr: {
            type: DataTypes.STRING
        },
        language_name: {
            type: DataTypes.STRING,
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        // Other model options go here
    });

    BibleTranslations.sync({
        force,
        alter: true
    })

    // `sequelize.define` also returns the model
    console.log('BibleTranslations model initilized.');
    return BibleTranslations;
}
