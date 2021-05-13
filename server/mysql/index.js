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
    query (addSql) {
        return new Promise((resolve, reject) => {
            pool.query(addSql, function (error, results, fields) {
                if (error) {
                    throw error
                };
                resolve(results)
                // console.log('The solution is: ', results[0].solution);
            });
        })
    }
    search(data){
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * from user_list where name='${data.username}'`, function (error, results, fields) {
                if (error) {
                    throw error
                };
                resolve(results)
            });
        })
    }
    register(data){
        return new Promise((resolve, reject) => {
            pool.query(`INSERT INTO user_list (name,password)  VALUES ('${data.username}','${data.password}' )`, function (error, results, fields) {
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
            pool.query(`SELECT * from user_list where name='${data.username}'`, function (error, results, fields) {
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
