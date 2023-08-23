const express=require('express')
const app=express()
const data =require('./data') 

app.get('/',(req,res)=>{
    res.send('<h1>Hello HomePage</h1><a href="/api">API it is</a>')
})


app.get('/api',(req,res)=>{
    res.json(data)
})


app.listen(5000,()=>{
    console.log('listening on our fav song');
})
