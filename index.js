const express = require('express');
app=express();


app.get("/", function (req, res){
    res.send("My First Express JS Application");
});

app.listen(8000, function (){
    console.log("Server Run Successfully");
})