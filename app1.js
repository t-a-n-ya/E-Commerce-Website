const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/E-commerce');
const Contact = require('./mng')
const Signup = require('./mng')
const port = 3001;

//static files
app.use('/css', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "./node_modules/jquery/dist")));
app.use('/static', express.static('static'));

//to extrct dt from website
app.use(express.urlencoded({extended:false}))          

//set the template engine  as pug
app.set('view engine', 'pug')      

  //set views directory                    
app.set('/views', path.join(__dirname , 'views'))    

//endpoints
app.get('/', (req,res)=>{
    res.status(200).render('home');
});
app.get('/login', (req,res)=>{
    res.status(200).render('login');
});
app.get('/signup', (req,res)=>{
    res.status(200).render('signup.pug');
});
app.post('/signup', (req,res) =>{
    var signupInfo = req.body;

    if(!signupInfo.name || !signupInfo.phone || !signupInfo.email || !signupInfo.password){
        res.send("please enter all the details correctly")
    }else{
     var signupData = new Signup(req.body);}
    signupData.save().then(() => {
    res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })
})
app.get('/contact', (req,res)=>{
    res.status(200).render('contact.pug');
});
app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
    });
  });

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})