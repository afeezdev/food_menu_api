const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const knex = require('knex');


const db = knex({
    client: "mysql",
    connection: {
        host: 'bvgk1v2sg2fwfdcsefmi-mysql.services.clever-cloud.com',
        user: 'uwqkffxlhbawexpg',
        password: 'IOtKcxyfFaljCErWlMEX',
        database: 'bvgk1v2sg2fwfdcsefmi',
    },
});

module.exports = db;