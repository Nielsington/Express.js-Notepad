import dotenv from 'dotenv';
import mariadb from 'mariadb';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;
const dbName = process.env.DB_NAME;

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
        res.send(data2);
    } catch(err) {
        throw err;
    } finally {
        if (connection) connection.end();
    }
});

app.get('/delete-row/:id', async (req, res) => {
    let connection;
    const idParam = req.params.id;

    try {
        connection = await pool.getConnection();
        const deleteRow = await connection.query(`DELETE FROM ${dbName}.ideas WHERE id=?`, [idParam]);

    }catch(err){
        throw err
    }finally{
        if (connection) connection.end();
    }
})

app.get('/edit-idea/:id', async (req, res) => {
    let connection;
    const idParam = req.params.id;

    try {
        connection = await pool.getConnection();
        const updateRow = await connection.query(`SELECT title, description FROM ${dbName}.ideas WHERE id= ?`, [idParam]);
        res.send(updateRow);
    }catch(err){
        throw err
    }finally{
        if (connection) connection.end();
    }
    
})

app.post('/update-idea/:id', async (req,res) =>{
    let connection;
    const ideaTitle = req.body.editTitle;
    const ideaDescription = req.body.editDescription;
    const idParam = req.params.id;
    console.log('Yo drerrie');
    try {
        connection = await pool.getConnection();
        const deleteRow = await connection.query(
            `UPDATE ${dbName}.ideas 
            SET title= ?, description= ?
            WHERE id= ?`, [ideaTitle, ideaDescription,idParam]
        );
        res.redirect('http://127.0.0.1:5500/client/index.html');

    }catch(err){
        throw err
    }finally{
        if (connection) connection.end();
    }
})

app.listen(port, () => {
    console.log('http://localhost:3000');
})