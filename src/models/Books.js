const {
    Sequelize,
    DataTypes
} = require('sequelize');

module.exports = (sequelize, force) => {
    const Books = sequelize.define('Books', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        short_title: {
            type: DataTypes.STRING
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        translation_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        chapters_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        testament: {
            type: DataTypes.ENUM(['old', 'new']),
            allowNull: false
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        // Other model options go here
    });

    Books.sync({
        force,
        alter: true
    })

    // `sequelize.define` also returns the model
    console.log('Books model initilized.'); // true

    return Books;
}
