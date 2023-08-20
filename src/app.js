const express= require("express")
const path= require("path")
const mainRouter = require('./routers/mainRouter')
const app=express();

app.use(express.static("public"));

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.listen(3000,()=> console.log("server on"));

app.use(mainRouter);