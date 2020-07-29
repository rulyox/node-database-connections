const mysql = require('mysql');

const config = {
    host: '111.222.333.444',
    port: 1234,
    user: 'user',
    password: 'password',
    database: 'name'
};

const pool = mysql.createPool(config);

exports.end = () => {

    pool.end();

};

exports.run = (query) => {
    return new Promise((resolve, reject) => {

        pool.query(query, (error, result, fields) => {

            if(error) reject(error);
            else resolve(result);

        });

    });
};
