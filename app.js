const express= require("express")
const path= require("path")
const app=express();

app.use(express.static("public"));

app.listen(3000,()=> console.log("server on"));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"));

});
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"));

});
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"));

});

app.get("/cart",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/cart.html"));

});

app.get("/productRedDead2",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/detalleRedDead2.html"));

});
app.get("/productDonQuijote",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/detalleDonQuijote.html"));
});
app.get("/productHorizon",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/detalleHorizon.html"));

});
app.get("/inicio",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"));

});