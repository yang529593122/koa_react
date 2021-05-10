const mysql = require('mysql');
const config = require('../config/default.js')

const pool  = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE
});


class Mysql {
    constructor () {

    }
    query () {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * from test_dome', function (error, results, fields) {
                if (error) {
                    throw error
                };
                resolve(results)
                // console.log('The solution is: ', results[0].solution);
            });
        })
    }
    login (data) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * from user_list where name='${data.username}' and password='${data.password}'`, function (error, results, fields) {
                if (error) {
                    throw error
                };
                resolve(results)
                // console.log('The solution is: ', results[0].solution);
            });
        })

    }
}

module.exports = new Mysql()
