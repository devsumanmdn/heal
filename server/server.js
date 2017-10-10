const express = require('express');
const path = require('path');


var app = express();



app.use('/', express.static(path.join(__dirname, '../public')));
// app.set('views', './public'); // specify the views directory
// app.set('view engine', ''); // register the template engine

app.use(function (req,res,next) {
    var err = new Error('Sorry!!! Page You are looking for is not found!');
    err.status = 404 ;
    next(err);
});

app.use(function (err,req,res,next) {
    res.status(err.status || 500);
    res.sendFile(path.join(__dirname, '../public/error.html'));
});




app.get('/',(req,res) => {
    res.sendFile('/index.html');
    console.log('request');
});

app.listen(3000, (err) => {
    if(!err)
    return console.log('runnig on port 3000');
    console.log(err)
});