import dotenv from 'dotenv';
import mariadb from 'mariadb';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT;
const dbName = process.env.DB_NAME;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectionLimit: 5
});

app.post('/submit-idea', async (req, res) => {
    const ideaTitle = req.body.ideaTitle;
    const ideaDescription = req.body.ideaDescription;

    let connection;
    
    try {
        connection = await pool.getConnection();
        const data = await connection.query(
            `INSERT INTO ${dbName}.ideas (title, description)
             VALUES (?, ?)`, [ideaTitle, ideaDescription]
        );
        
        console.log(data)
        res.redirect('http://127.0.0.1:5500/client/index.html');
        
    } catch(err) {
        throw err;
    } finally {
        if (connection) connection.end();
    }
});

app.get('/ideas', async (req, res) => {
    let connection;

    try {
        connection = await pool.getConnection();
        const data2 = await connection.query(`SELECT * FROM ${dbName}.ideas`);
        console.log(data2);
        res.send(data2);
    } catch(err) {
        throw err;
    } finally {
        if (connection) connection.end();
    }
});

app.listen(port, (req, res) => {
    console.log('http://localhost:3000');
})