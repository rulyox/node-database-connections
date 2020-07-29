const mysql = require('./db/mysql');
const postgresql = require('./db/postgresql');
const redshift = require('./db/redshift');
const sqlite = require('./db/sqlite');

async function mysqlTest() {

    try {

        const result = await mysql.run('SELECT * FROM somewhere');
        console.log(result);

        mysql.end();

    } catch(error) {

        console.log(error);

    }

}

async function postgresqlTest() {

    try {

        const result = await postgresql.run('SELECT * FROM somewhere');
        console.log(result);

        postgresql.end();

    } catch(error) {

        console.log(error);

    }

}

async function redshiftTest() {

    try {

        const result = await redshift.run('SELECT * FROM somewhere');
        console.log(result);

        redshift.end();

    } catch(error) {

        console.log(error);

    }

}

async function sqliteTest() {

    try {

        sqlite.start();

        const result = await sqlite.run('SELECT * FROM somewhere');
        console.log(result);

        sqlite.end();

    } catch(error) {

        console.log(error);

    }

}

async function main() {

    console.log('MySQL');
    await mysqlTest();
    console.log();

    console.log('PostgreSQL');
    await postgresqlTest();
    console.log();

    console.log('Redshift');
    await redshiftTest();
    console.log();

    console.log('SQLite');
    await sqliteTest();
    console.log();

}

main();
