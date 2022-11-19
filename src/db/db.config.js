module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '12345678',
    DB: 'bible_v1.4.17',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};