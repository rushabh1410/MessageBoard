var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var bodyParser = require("body-parser");
var cors = require('cors');
const { Console } = require('console');
var jwt  = require('jsonwebtoken');

var app= express();

var messages=[{text:'some text' ,owner:'RushABH'},{text:'othter message',owner:'jane'}];
var users = [];
app.use(bodyParser.json());
app.use(cors())

var api = express.Router();
var auth = express.Router();

api.get('/messages',(req,res)=>{
    res.json(messages);
})

api.get('/messages/:user',(req,res)=>{
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user)
    res.json(result);
})


api.post('/messages',(req,res)=>{
   messages.push(req.body);
   console.log(req.body);
   res.send(req.body);
})

auth.post('/register',(req,res)=>{
    var index = users.push(req.body) - 1 ;
    var user =users[index];
    var token = jwt.sign(index,'123');
    console.log(user);
    console.log(token);
    var name = user.firstName;
    res.json({name,token});
 })

app.use('/api',api);
app.use('/auth',auth);
app.listen(1234);