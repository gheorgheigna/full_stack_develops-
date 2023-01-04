var express = require('express');
const db = require('./config/db');
const cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());





// Route to get all posts
app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM war", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    }
        );   
    });

app.post('/api/create', (req,res)=> {

        const username = req.body.username;
        const passwordd = req.body.passwordd;
        const firstname = req.body.firstname; 
        const lastname=req.body.lastname;
        const email=req.body.email;
        const type_of_user=req.body.type_of_user;

        
        console.log(username,passwordd,email)
        
        db.query("INSERT INTO war (username, passwordd, firstname, lastname,email,type_of_user) VALUES (?,?,?,?,?,?)",[username,passwordd,firstname,lastname,email,type_of_user], (err,result)=>{
           if(err) {
               console.log(err)
           } 
           console.log(result)
        }
        );   
    })


    // Route to get one post
    app.post('/api/getFromId',(req,res)=>{
    
        const username1 = req.body.username1;
        const passwordd1 = req.body.passwordd1;
        var sql = 'SELECT * FROM war WHERE username = ? OR passwordd = ?';
        db.query(sql, [username1, passwordd1], (err,result)=>{
            if(err) {
            console.log(err)
           

            } 
            console.log(req.body)
        res.send(result)
        }
        );   
        });
    

var server = app.listen(3002, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})