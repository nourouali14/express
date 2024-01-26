const express=require('express')
const logger=require('./middleware/logger')
const fs=require('fs')

const app=express()



const port=3000;


app.get('/',(req,res)=>{
    fs.readFile('./home.html','utf-8',(err,data)=>{
        err?res.send(err):res.send(data)
    })
})

app.get('/contact',(req,res)=>{
    fs.readFile('./ContactUs.html','utf-8',(err,data)=>{
        err?res.send(err):res.send(data)
    })
})

app.get('/service',logger,(req,res)=>{
    fs.readFile('./services.html','utf-8',(err,data)=>{
        err?res.send(err):res.send(data)
    })
})




app.listen(port,(err)=>err? console.log(err):console.log(`app listning on ${port}`))