require('dotenv').config();
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const port = process.env.PORT || 3000;
    const connectDB = require('./db/connect');
    const cors = require('cors');
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({extended:false}));
    app.get('/' , (req,res)=>{
        res.status(200).send('Aradhya Server');
    })

    //Start-up code
    const start = async(url) => {
        try{
            await connectDB(url);
            app.listen(port,()=> console.log(`app is listening at port ${port}`));
        }catch(err){
            console.log(err);
        }
    }
    start(process.env.MONGO_URI);