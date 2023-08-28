require('./db/connect')
const express=require('express')
const app=express()
const port =3000
const tasks=require('./Routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
app.use(express.static('./public'))
app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send('Task Manager is there')
})

app.use('/api/v1/tasks',tasks)
app.use(notFound)


const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Listening into our fav song on ${port}`))
    }
    catch(err){
        console.log(err);
    }
}

start()
