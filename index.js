const express=require("express");
const mongoose=require("mongoose");
const route=require("./route/route");
const path=require("path");
require("dotenv").config();

const app=express();
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static(path.join(__dirname,"publics")))
app.use(express.static(path.join(__dirname,"uploads")))
const dbUri = process.env.URL;

console.log("DB URI: ", dbUri);
mongoose.connect(dbUri);


const PORT=process.env.PORT || 3000;
app.use(route);
console.log(path.join(__dirname,"publics")
)
app.listen(PORT,()=>{
    console.log(`Server Start At ${PORT}`);
})