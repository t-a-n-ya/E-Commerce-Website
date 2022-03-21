const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//static files
app.use('/css', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "./node_modules/jquery/dist")));
app.use('/static', express.static('static'));

//console.log(path.join(__dirname, "./static/1.jpg"))
//app.use(express.urlencoded())  //to extrct dt from website

//set the template engine  as pug
app.set('view engine', 'pug')

//set views directory
app.set('/views', path.join(__dirname , 'views'))

//endpoints
/* app.get('/', (req,res)=>{
       res.status(200).render('base.pug');
}); */
app.get('/', (req,res)=>{
    res.status(200).render('home.pug');
});
app.get('/l', (req,res)=>{
    res.status(200).render('login.pug');
});
app.get('/s', (req,res)=>{
    res.status(200).render('signup.pug');
});
app.get('/c', (req,res)=>{
    res.status(200).render('contact.pug');
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})