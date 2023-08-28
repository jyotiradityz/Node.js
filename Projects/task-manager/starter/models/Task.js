const mongoose  = require("mongoose");

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Must Provide a name'],
        trim:true,
        maxlength:[20,'Name cant be more than 20 Char']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',TaskSchema)