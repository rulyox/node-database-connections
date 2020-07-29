const redshift = require('node-redshift');

const config = {
    host: '111.222.333.444',
    port: 1234,
    user: 'user',
    password: 'password',
    database: 'name'
};

const client = new redshift(config, []);

exports.end = () => {

    client.close();

};

exports.run = (query) => {
    return new Promise((resolve, reject) => {

        client.query(query)
            .then((result) => resolve(result.rows))
            .catch((error) => reject(error));

    });
};
