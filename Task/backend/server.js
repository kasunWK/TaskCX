const express = require ('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
      app.use(express.json());

app.use(cors());

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "task"
})

const bcrypt = require('bcrypt');

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        const sql = "INSERT INTO signup (`name`, `email`, `password`) VALUES (?, ?, ?)";
        db.query(sql, [name, email, hashedPassword], (err, data) => {
            if (err) {
                console.error('Error signing up:', err);
                return res.status(500).json({ error: 'Failed to sign up' });
            }
            return res.status(201).json({ message: 'Signup successful' });
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        return res.status(500).json({ error: 'Failed to sign up' });
    }
});


app.listen(8081,()=>{
    console.log("Listning");
})