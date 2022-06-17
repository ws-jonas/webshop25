const express = require("express");
const mysql = require("mysql");
const server = express();
const cors = require('cors');
server.use(
    cors({
        origin: "*",
    }));

//server.use(function(req, res, next){
//    res.setHeader("Access-Control-Allow-Origin", "*");
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//    next();
//});

const db = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "",
    database: "trikot25"
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("connected");
})


//Login
server.get("/login", (req,res) =>{

    db.query(
       "SELECT * FROM user WHERE mail=${req.body.mail} AND password = ${req.body.password}",
       (err, result) => {

          if (err) res.send({err});
          console.log(result);
          if(result.length > 0){
              res.send(result);
          } else {
              res.send("WROOOONNNGGG");
          }
   });
});

//Register

