const path = require('path');
const sqlite = require('sqlite3');

const dbPath = './';
const dbFile = 'database.db';

let db;

exports.start = () => {

    const file = path.resolve(__dirname, dbPath, dbFile);

    db = new sqlite.Database(file, (error) => {

        if(error) throw error;

        // CREATE TABLE IF NOT EXISTS

    });

};

exports.end = () => {

    db.close();

};

exports.run = (query) => {
    return new Promise((resolve, reject) => {

        db.all(query, (error, rows) => {

            if(error) reject(error);
            else resolve(rows);

        });

    });
};
