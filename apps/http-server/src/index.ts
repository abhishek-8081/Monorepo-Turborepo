import express from "express";
const app = express();

app.get("/signup",(req,res)=>{
    res.send("Hello World from signup!");

})

app.get("/signin",(req,res)=>{
    res.send("Hello World from signin!");

})

app.get("/chat",(req,res)=>{
    res.send("Hello World from signin !");

})


app.listen(3000);