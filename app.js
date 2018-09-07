var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

 var app = express();
 app.set('views',path.join(__dirname,'views'));
 app.set('view engine','ejs');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(express.static(path.join(__dirname,'public')));


 app.get('/',(req,res)=>{
    res.render('header',{
                    })
    
})

app.get('/index',(req,res)=>{
    res.render('layout',{
       
        body:'index'
                            
                        }

    )
})
app.get('/about',(req,res)=>{
    res.render('layout',{
        body:'about'
    })
})
app.get('/services',(req,res)=>{   
    res.render('layout',{
        body:'services'})
})


 app.listen(5000);
 console.log('server is running on 5000');
