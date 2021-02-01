const express= require('express')
const movie= require('./api')
const path =require('path')
const hbs = require('hbs')

const app=express()
const publicDirectoryPath=path.join(__dirname)
const partialPath=path.join(__dirname,'/views/templates')
const viewsPath =path.join(__dirname,'/views')
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index')
})

app.get('/movies',(req,res)=>{
    var abc=req.query.movie
    if (!abc){
        return res.send({error:'Please provide a movie name!'})
    }else{
    
       movie(abc,(error,resp)=>{
           if (error){
               return res.send({error})
           }else{
               return res.send(resp)
           }
       })
    }
    
})

app.get('/*',(req,res)=>{
    res.send("ERROR! You're trying to view an Invalid URL")
})

app.listen(3000,()=>{
    console.log('Server running on port 3000!')
})