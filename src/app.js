const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;
//path the dir
console.log(path.join(__dirname,"../public"));
const hash = path.join(__dirname,"../public");
const dung_en = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",dung_en);
hbs.registerPartials(partial_path)
//static
app.use(express.static(hash));

//Routing
app.get("",(req,res) => {
    res.render("index")
});

app.get('/about',(req,res) => {
    res.render("about")
});

app.get('/weather',(req,res) => {
    res.render("weather")
});

app.get('*',(req,res) => {
    res.render("404",{
        errorMsg:'Opps!Page Not Found'
    });
});

app.listen(port,() => {
    console.log(`This is on the port no ${port}`);
});