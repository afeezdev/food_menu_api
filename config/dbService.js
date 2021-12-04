const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env'});
const knex = require('knex');

console.log(process.env.HOST)

const db = knex({
    client: "mysql",
    connection: {
        host: process.env.HOST,
        user: 'uwqkffxlhbawexpg',
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    },
});

module.exports = db;