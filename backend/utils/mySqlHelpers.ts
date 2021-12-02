import mysql from 'mysql2/promise';

export const makeConnection = () => {
    const yhteys = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'main',
    });
    return yhteys;
}

