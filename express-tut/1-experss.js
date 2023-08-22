const express=require('express')
const app=express()

// app.get('/',(req,res)=>{
//     res.send('Welcome Hello')
// })

// app.get('/about',(req,res)=>{
//     res.send('Welcome in the about section')
// })

// app.get('*',(req,res)=>{
//     res.status(404).send('Wrong Side maybe')
// })

app.listen(5000,()=>{
    console.log('Listening on 5000 port'); 
})