const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");
const bcrypt = require("bcrypt");
require('dotenv').config();

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render("login.ejs");
})


app.post('/register',async (req,res)=>{
    const newUsername=req.body.newUsername;
    const newPassword=req.body.newPassword;
    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await db.query("INSERT INTO form (username, password, highscore) VALUES($1, $2, $3)",[newUsername,hashedPassword,0]);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error in registration");
    }
})


app.post('/login',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    try {
        const result = await db.query("SELECT * FROM form WHERE username=$1", [username]);
        if (result.rows.length > 0) {  
            const user = result.rows[0];
            const isPasswordMatch = await bcrypt.compare(password, user.password); 

            if (isPasswordMatch) {
                res.render("index.ejs", { username: username, highscore: user.highscore });
            } else {
                res.status(401).send("Wrong details");
            }
        } else {
            res.status(401).send("Wrong details");  
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
})

app.post('/updateHighScore', async (req, res) => {
    const username = req.body.username;
    const newHighScore = req.body.highscore;
    try {
        await db.query("UPDATE form SET highscore=$1 WHERE username=$2", [newHighScore, username]);
        res.status(200).send("High score updated successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating high score");
    }
});

app.get('/logout', (req, res) => {
    res.redirect('/');
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
