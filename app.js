const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/signup",function(req,res){
    var email= req.body.email;
    var uname = req.body.uname;
    var password= req.body.password;
    console.log(email,uname,password); 

    if(res.statusCode === 200){
        res.send("Thanks for Sigining Up");
    }else{
        res.send("Spmething went wrong");
    }
});
app.post("/signin",function(req,res){
    var em= req.body.em;
    var pass= req.body.pass;
    console.log(em,pass); 

    if(res.statusCode === 200){
        res.send("SucessFully Logged in");
    }else{
        res.send("Spmething went wrong");
    }
});
app.listen(process.env.PORT || 3000,function(){
    console.log("Server Started");
});