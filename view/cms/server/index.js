const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const app = express(); // create express app
const mongoose = require('./config/mongoose');
const Dummylogin=require('./model/Dummylogin')
const Visitorpass=require('./model/Visitorpass')
const Announcements=require('./model/Announcements')

// add middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


app.get('/logindb/:id',(req,res)=>{
  Dummylogin.find({id:req.params.id},(err,s)=>{
    res.send(s)
  })
})
app.get('/visitorsdb',(req,res)=>{
  Visitorpass.find({},(err,s)=>{
    res.send(s)
  })
})
app.get('/anndb',(req,res)=>{
  Announcements.find({},(err,s)=>{
    res.send(s)
  })
})
app.get('/Dummylogins',(req,res)=>{
  Dummylogin.find({},(err,s)=>{
    res.send(s)
  })
})
app.get('/homes',(req,res)=>{
  Dummylogin.find({id:req.params.id},(err,s)=>{
    if(s[0]!=req.body.p){
      console.log(s[0])
      console.log(req.body.p)
      window.location.reload(true);
      res.redirect('/home')
      
    }
    else{
      res.redirect('/')
      
    }
    console.log(abc)
    
  })
})
app.post('/postvisitor',(req,res)=>{
  console.log(req.body.visitor_name)
  const visitor=new Visitorpass({
    visitor_name:req.body.visitor_name,
    visitor_reason:req.body.visitor_reason,
    visitor_mobile:req.body.visitor_mobile,
    visitor_date:req.body.visitor_date,
    owner_id:req.body.id
  })
  visitor.save()
  console.log('success')
  res.redirect('/home')

})
app.post('/addannouncement',(req,res)=>{
  const annon=new Announcements({
    ann_name:req.body.annname,
    ann_desc:req.body.anndesc
  })
  annon.save()
})

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});



// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});