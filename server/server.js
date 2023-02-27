import dotenv from 'dotenv';
import mariadb from 'mariadb';
import express from 'express';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT;

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectionLimit: 5
});

//TODO: Database maken

// (async () => {
//     let connection;
//     try {
//         connection = await pool.getConnection();
//         const data = await connection.query(`SELECT * FROM brilliant_minds.ideas`);
//         console.log(data)
//     } catch(err) {
//         throw err;
//     } finally {
//         if (connection) connection.end();
//     }
// })()

app.listen(port, (req, res) => {
    console.log(port);
})