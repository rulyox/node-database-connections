const pg = require('pg');

const config = {
    host: '111.222.333.444',
    port: 1234,
    user: 'user',
    password: 'password',
    database: 'name'
};

const pool = new pg.Pool(config);

exports.end = () => {

    pool.end();

};

exports.run = (query) => {
    return new Promise((resolve, reject) => {

        pool.query(query)
            .then((result) => resolve(result.rows))
            .catch((error) => reject(error));

    });
};
