const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;



const { Pool } = require('pg');

// Configurer la connexion à PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Test de connexion à la base de données
pool.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données', err);
    } else {
        console.log('Connecté à la base de données PostgreSQL');
    }
});

// Middleware pour parser les requêtes JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());





// Route API pour récupérer les utilisateurs
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users'); 
        res.json(result.rows);
    } catch (err) {
        console.error('Erreur lors de la récupération des utilisateurs', err);
        res.status(500).send('Erreur serveur');
    }
});

;

// API routes (if any)
app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello from the server!' });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')))

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});