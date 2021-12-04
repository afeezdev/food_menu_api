const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env'});
const knex = require('knex');

const db = knex({
    client: "mysql",
    connection: {
        host: process.env.HOST,
        user: process.env.USER_DB,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    },
});

module.exports = db;