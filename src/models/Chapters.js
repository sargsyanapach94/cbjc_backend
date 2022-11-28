const {
    Sequelize,
    DataTypes
} = require('sequelize');

module.exports = (sequelize) => {
    const Chapters = sequelize.define('Chapters', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preface: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        translation_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        book_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        book_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        language: {
            type: DataTypes.STRING,
        }
    }, {
        // Other model options go here
    });

    // `sequelize.define` also returns the model
    console.log('Chapters model initilized.'); // true
    return Chapters;
}
