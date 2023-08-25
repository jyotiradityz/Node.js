const express=require('express')

const getAlltask=(req,res)=>{
    res.send('Get Your All Tasks')
} 
const createTask=(req,res)=>{
    res.json(req.body)
}
const getTask=(req,res)=>{
    res.json({id:req.params.id})
}
const updateTask=(req,res)=>{
    res.send('Update Task')
}
const deleteTask=(req,res)=>{
    res.send('Deleted The Task')
}


module.exports={getAlltask,createTask,deleteTask,updateTask,getTask}