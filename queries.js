const Pool = require('pg').Pool
const pool = new Pool({
    user: 'lexferndo',
    host: 'localhost',
    database: 'dvdrental',
    password: 'password',
    port: 5432,
})

module.exports = pool