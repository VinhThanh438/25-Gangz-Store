import mysql from "mysql2";

const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "25-gangz-store",
});

module.exports = pool;
