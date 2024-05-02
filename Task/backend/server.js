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

app.post('/signup',(req, res)=>{
    const sql ="INSERT INTO signup(`name`,`email`,`password`) VALUES (?)"
    const values =[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values],(err, data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login',(req, res)=>{
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json("Error");
        if(data.length > 0) {
            return res.json("Loging successful")
        }else{
            return res.json("No Recorded data")
        }
    })
})

app.listen(8081,()=>{
    console.log("Listning");
})