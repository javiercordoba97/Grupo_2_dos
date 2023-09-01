const express= require("express")
const path= require("path")
const mainRouter = require('./routers/mainRouter')
const app=express();
const methodOverride = require('method-override');

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.listen(3000,()=> console.log("server on"));

app.use(mainRouter);