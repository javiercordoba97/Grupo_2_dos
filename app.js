const express= require("express")
const path= require("path")
const app=express();

app.use(express.static("public"));

app.listen(3000,()=> console.log("server on"));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"));

});
app.get("/Logo",(req,res)=>{
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
app.get("/product",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/detalleProducto.html"));
});