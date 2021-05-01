const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended:false}));
var items = ["Brushing Teeth", "Having Bath", "Having breakfast"];

app.get("/",function(req,res){
    var today = new Date();
    var option ={
        weekday : 'long',
        day : 'numeric',
        month : 'long'
    }
    var day = today.toLocaleDateString("en-US",option);
    res.render("list",{nameofDay:day,toDoList:items});
});

app.post("/",function(req,res){
    var item = req.body.task;
    items.push(item);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("server running in 3000 port");
});